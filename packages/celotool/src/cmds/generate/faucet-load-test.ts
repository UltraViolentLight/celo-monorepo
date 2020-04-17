/* tslint:disable no-console */
import { newKit } from '@celo/contractkit'
import { convertToContractDecimals } from 'src/lib/contract-utils'
import { AccountType, generateAddress } from 'src/lib/generate_utils'
import yargs from 'yargs'

interface Bip32Argv {
  mnemonic: string
  count: number
  threads: number
}

export const command = 'faucet-load-test'

export const describe = 'command for fauceting the addresses used for load testing'

export const builder = (argv: yargs.Argv) => {
  return argv
    .option('mnemonic', {
      type: 'string',
      description: 'BIP-39 mnemonic',
      demandOption: 'Please specify a mnemonic from which to derive a public key',
      alias: 'm',
    })
    .option('count', {
      type: 'number',
      description: 'Index of key to generate',
      demandOption: 'Please specify a key index',
      alias: 'c',
    })
    .option('threads', {
      type: 'number',
      description: 'Index of key to generate',
      demandOption: 'Please specify a key index',
      alias: 't',
    })
}

/*
 * Given a BIP-39 mnemonic, we generate a level 2 child public key from the private key using the
 * BIP-32 standard.
 * https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
 * https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
 */
export const handler = async (argv: Bip32Argv) => {
  const accountType = AccountType.LOAD_TESTING_ACCOUNT

  const kit = newKit('http://localhost:8545')
  const account = (await kit.web3.eth.getAccounts())[0]
  console.log(`Using account: ${account}`)
  kit.defaultAccount = account

  const [goldToken, stableToken, reserve] = await Promise.all([
    kit.contracts.getGoldToken(),
    kit.contracts.getStableToken(),
    kit.contracts.getReserve(),
  ])
  const goldAmount = await convertToContractDecimals(0.01, goldToken)
  const stableTokenAmount = await convertToContractDecimals(0.01, stableToken)

  for (let i = 0; i < argv.count; i++) {
    for (let t = 0; t < argv.threads; t++) {
      const index = parseInt(`${i}${t}`, 10)
      const address = generateAddress(argv.mnemonic, accountType, index)
      console.log(
        `Fauceting ${goldAmount.toFixed()} Gold and ${stableTokenAmount.toFixed()} StableToken to ${address}`
      )
      if (await reserve.isSpender(account)) {
        await reserve.transferGold(address, goldAmount.toFixed()).sendAndWaitForReceipt()
      } else {
        await goldToken.transfer(address, goldAmount.toFixed()).sendAndWaitForReceipt()
      }
      await stableToken.transfer(address, stableTokenAmount.toFixed()).sendAndWaitForReceipt()
    }
  }
}