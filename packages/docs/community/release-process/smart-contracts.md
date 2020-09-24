# Smart Contracts Release Process

{% hint style="warning" %}
This release process is a work in progress. Many infrastructure components required to execute it are not in place, and the process itself is subject to change.
{% endhint %}

## Versioning
Each deployed Celo core smart contract is versioned independently, according to semantic versioning, as described at [semver.org](https://semver.org), with the following modifications:

  * STORAGE version when you make incompatible storage layout changes
  * MAJOR version when you make incompatible ABI changes
  * MINOR version when you add functionality in a backwards compatible manner, and
  * PATCH version when you make backwards compatible bug fixes.

Changes to core smart contracts are made via on-chain Governance, approximately four times a year. When a release is made, **all** smart contracts from the release branch that differ from the deployed smart contracts are released, and included in the **same** governance proposal.

### Mixins and libraries
Mixin contracts and libraries are considered part of the contracts that consume them. When a mixin or library has changed, all contracts that consume them should be considered to have changed as well, and thus the contracts should have their version numbers incremented and should be re-deployed as part of the next smart contract release.

## Identifying releases

Each release is identified by a unique monotonically increasing number `N`, with `1` being the first release.

### Git branches
Every smart contract release has a designated branch, e.g. `release/contracts/N` in the celo-monorepo.

Ongoing smart contract development is done on the `master` branch.

### Github tags
All release branches should be tagged as such, e.g. `celo-contracts-N`. Each should include a summary of the release contents.

### Contracts
Every deployed smart contract has its current version number as a constant which is publicly accessible via the `getVersion()` function, which returns the storage, major, minor, and patch version. Version number is encoded in the Solidity source and updated as part of code changes.

Contracts deployed to a live network without the `getVersion()` function, such as the original set of core contracts, are to be considered version `1.0.0.0`.

## Build Release and Proposal Process
Using the following scripts new contracts can be built and deployed alongside a corresponding on-chain governance proposal. This step will likely be run by cLabs mostly to front gas expenditures, etc. Run the following scripts from the branch with the new release contracts:

```bash
## Script 1 ##
# verify the current contract bytecode on the network matches the contracts currently on the RC1 branch
yarn truffle exec --network $NETWORK ./scripts/truffle/verify-bytecode.js --build_artifacts build/rc1 --before_release_1

## Script 2 ##
# generate report on backwards compatibility between RC1 and current branch with new release contracts
yarn ts-node scripts/check-backward.ts report --exclude ".*Test|Mock.*|I[A-Z].*|.*Proxy|LinkedList|SortedLinkedList|SortedLinkedListWithMedian|MultiSig.*|ReleaseGold" -o build/rc1 -n build/contracts --output_file report.json

## Script 3 ##
# deploy new contracts and generate Governance proposal for upgrade
yarn truffle exec --network development ./scripts/truffle/make-release.js --build_directory build/ --report report.json --proposal proposal.json --initialize_data example-initialize-data.json'
            
            
```

This script does the following:
  #### Script 1:
  1. Compiles the contracts at <code>rc1</code> branch and confirms that the compiled bytecode matches what is currently deployed on the specified network.
  #### Script 2:
  1. Compiles the contracts in the current branch and checks backwards compatibility with what is currently deployed on the specified network, with the following exceptions:
     1. If the STORAGE version has changed, does not perform backwards compatibility checks
     2. If the MAJOR version has changed, checks that the storage layout is backwards compatible, but does not check that the contract ABI is backwards compatible.
  2. For contracts that have changed, confirms that the version number in the current branch is strictly greater than the deployed version number.
  3. For contracts that have not changed, confirms that the version number in the current branch is exactly the same as the deployed version number
  
  #### Script 3:
  1. For contracts that have changed, deploys those contracts to the specified network.
  2. Creates and submits a single governance proposal to upgrade to the newly deployed contracts.
     1. STORAGE updates are adopted by deploying a new proxy and implementation and updating the Registry contract.
     2. All other updates are adopted by updating the proxy contract’s implementation pointer.

## Verify Release Process

## Testing

All releases should be evaluated according to the following tests.

### Unit tests
All changes since the last release should be covered by unit tests. Unit test coverage should be enforced by automated checks run on every commit.

### Performance
A ceiling on the gas consumption for all common operations should be defined and enforced by automated checks run on every commit.

### Backwards compatibility
Automated checks should ensure that any new commit to `master` does not introduce a breaking change to storage layout, ABI, or other common backwards compatibility issues unless the STORAGE or MAJOR version numbers are incremented.

Backwards compatibility tests will also be run before every release to confirm that no breaking changes exist between the pending release and deployed smart contracts.

### Audits
All changes since the last release should be audited by a reputable third party auditor.

### Emergency patches

If patches need to be applied before the next scheduled smart contract release, they should be cherry picked to a new release branch, branched from the latest deployed release branch.

## Promotion process

Deploying a new contract release should occur with the following process. On-chain governance proposals should be submitted on Tuesdays for consistency and predictability.

<table>
  <tr>
    <td>Date</td>
    <td>Action</td>
  </tr>
  <tr>
    <td>T</td>
    <td>
      <ol>
        <li>Create a <code>release/contracts/N</code> branch at the desired commit.</li>
        <li>Submit this branch to a reputable third party auditor for review.</li>
        <li>Begin drafting Release Notes and get team feedback.</li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>T+1w</td>
    <td>
      <ol>
        <li>Receive report from auditors.</li>
        <li>Finalize Release Notes: add audit summary and incorporate team feedback.</li>
        <li>If all issues in the audit report have straightforward fixes:
          <ol>
            <li> Submit a governance proposal draft using this format: https://github.com/celo-org/celo-proposals/blob/master/CGPs/template.md</li>
            <li> Announce forthcoming smart contract release on: https://forum.celo.org/c/governance</li>
            <li> Product to have direct communication with stakeholders???</li>
          </ol>
        </li>
        <li>Commit audit fixes to <code>master</code> and cherry-pick to the release branch.</li>
        <li>Submit audit fixes to auditors for review. </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>T+2w</td>
    <td>
      <ol>
        <li>Tag the release on Github using the finalized Release Notes.</li>
        <li>On Tuesday: Run the <a href="https://docs.celo.org/community/release-process/smart-contracts#build-process">smart contract release script</a> in order to to deploy the contracts to Baklava as well as submit a governance proposal.
         <ul>
          <li> This involves sheperding the proposal through an expedited <a href="https://docs.celo.org/celo-codebase/protocol/governance"> governance process.</a></li>
         </ul>
       </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>T+3w</td>
    <td>
      <ol>
        <li>Confirm all contracts working as intended on Baklava.</li>
        <li>On Tuesday: Run the <a href="https://docs.celo.org/community/release-process/smart-contracts#build-process">smart contract release script</a> in order to to deploy the contracts to Mainnet as well as submit a governance proposal.</li>
       <li>Update the corresponding governance proposal with the updated on-chain proposalID and mark CGP status as "PROPOSED".</li>
       <li>Product to engage with community about participation in the proposal???
       <li>Monitor the progress of the proposal through the <a href="https://docs.celo.org/celo-codebase/protocol/governance">governance process.</a>
        <ul>
         <li>Currently the governance process should take approximately 1 week: 24 hours for the dequeue process, 24 hours for the approval process, and 5 days for the referendum process. After which, the proposal is either declined or is ready to be executed within 3 days.</li>
         <li>For updated timeframes, use the celocli: <code>celocli network:parameters</code><li> 
        </ul>
       </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>T+4w</td>
    <td>
      <ol>
        <li>If passed, confirm all contracts working as intended on Mainnet.</li>
        <li>Change corresponding CGP status to EXCECUTED</li>
        <li>Run the <a href="https://docs.celo.org/community/release-process/smart-contracts#build-process">smart contract release script</a> in order to to deploy the contracts to Alfajores as well as submit a governance proposal.</li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>T+5w</td>
    <td>
      <ol>
        <li>Confirm all contracts working as intended on Alfajores.</li>
      </ol>
    </td>
  </tr>
</table>

If the contents of the release (i.e. source Git commit) change at any point after the release has been tagged in Git, the process should increment the release identifier, and process should start again from the beginning. If the changes are small or do not introduce new code (e.g. reverting a contract to a previous version) the audit step may be accelerated.

### Emergency patches

{% hint style="warning" %}
Work in progress
{% endhint %}

## Vulnerability Disclosure

Vulnerabilities in smart contract releases should be disclosed according to the [security policy](https://github.com/celo-org/celo-monorepo/blob/master/SECURITY.md).

## Dependencies
None

## Dependents

{% hint style="warning" %}
Work in progress
{% endhint %}

