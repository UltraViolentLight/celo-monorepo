# GovernanceWrapper

Contract managing voting for governance proposals.

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹Governance›

  ↳ **GovernanceWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_governance_.governancewrapper.md#constructor)

### Properties

* [approveHotfix](../classes/_wrappers_governance_.governancewrapper.md#approvehotfix)
* [concurrentProposals](../classes/_wrappers_governance_.governancewrapper.md#concurrentproposals)
* [dequeueFrequency](../classes/_wrappers_governance_.governancewrapper.md#dequeuefrequency)
* [dequeueProposalsIfReady](../classes/_wrappers_governance_.governancewrapper.md#dequeueproposalsifready)
* [events](../classes/_wrappers_governance_.governancewrapper.md#events)
* [executeHotfix](../classes/_wrappers_governance_.governancewrapper.md#executehotfix)
* [getApprover](../classes/_wrappers_governance_.governancewrapper.md#getapprover)
* [getProposalMetadata](../classes/_wrappers_governance_.governancewrapper.md#getproposalmetadata)
* [getProposalStage](../classes/_wrappers_governance_.governancewrapper.md#getproposalstage)
* [getProposalTransaction](../classes/_wrappers_governance_.governancewrapper.md#getproposaltransaction)
* [getQueue](../classes/_wrappers_governance_.governancewrapper.md#getqueue)
* [getUpvoteRecord](../classes/_wrappers_governance_.governancewrapper.md#getupvoterecord)
* [getUpvotes](../classes/_wrappers_governance_.governancewrapper.md#getupvotes)
* [getVotes](../classes/_wrappers_governance_.governancewrapper.md#getvotes)
* [hotfixWhitelistValidatorTally](../classes/_wrappers_governance_.governancewrapper.md#hotfixwhitelistvalidatortally)
* [isApproved](../classes/_wrappers_governance_.governancewrapper.md#isapproved)
* [isDequeuedProposalExpired](../classes/_wrappers_governance_.governancewrapper.md#isdequeuedproposalexpired)
* [isHotfixPassing](../classes/_wrappers_governance_.governancewrapper.md#ishotfixpassing)
* [isHotfixWhitelistedBy](../classes/_wrappers_governance_.governancewrapper.md#ishotfixwhitelistedby)
* [isProposalPassing](../classes/_wrappers_governance_.governancewrapper.md#isproposalpassing)
* [isQueued](../classes/_wrappers_governance_.governancewrapper.md#isqueued)
* [isQueuedProposalExpired](../classes/_wrappers_governance_.governancewrapper.md#isqueuedproposalexpired)
* [isVoting](../classes/_wrappers_governance_.governancewrapper.md#isvoting)
* [minDeposit](../classes/_wrappers_governance_.governancewrapper.md#mindeposit)
* [minQuorumSize](../classes/_wrappers_governance_.governancewrapper.md#minquorumsize)
* [prepareHotfix](../classes/_wrappers_governance_.governancewrapper.md#preparehotfix)
* [proposalExists](../classes/_wrappers_governance_.governancewrapper.md#proposalexists)
* [propose](../classes/_wrappers_governance_.governancewrapper.md#propose)
* [queueExpiry](../classes/_wrappers_governance_.governancewrapper.md#queueexpiry)
* [whitelistHotfix](../classes/_wrappers_governance_.governancewrapper.md#whitelisthotfix)

### Accessors

* [address](../classes/_wrappers_governance_.governancewrapper.md#address)

### Methods

* [approve](../classes/_wrappers_governance_.governancewrapper.md#approve)
* [execute](../classes/_wrappers_governance_.governancewrapper.md#execute)
* [getConfig](../classes/_wrappers_governance_.governancewrapper.md#getconfig)
* [getDequeue](../classes/_wrappers_governance_.governancewrapper.md#getdequeue)
* [getHotfixRecord](../classes/_wrappers_governance_.governancewrapper.md#gethotfixrecord)
* [getParticipationParameters](../classes/_wrappers_governance_.governancewrapper.md#getparticipationparameters)
* [getProposal](../classes/_wrappers_governance_.governancewrapper.md#getproposal)
* [getProposalRecord](../classes/_wrappers_governance_.governancewrapper.md#getproposalrecord)
* [getVoteValue](../classes/_wrappers_governance_.governancewrapper.md#getvotevalue)
* [getVoteWeight](../classes/_wrappers_governance_.governancewrapper.md#getvoteweight)
* [revokeUpvote](../classes/_wrappers_governance_.governancewrapper.md#revokeupvote)
* [sortedQueue](../classes/_wrappers_governance_.governancewrapper.md#sortedqueue)
* [stageDurations](../classes/_wrappers_governance_.governancewrapper.md#stagedurations)
* [timeUntilStages](../classes/_wrappers_governance_.governancewrapper.md#timeuntilstages)
* [upvote](../classes/_wrappers_governance_.governancewrapper.md#upvote)
* [vote](../classes/_wrappers_governance_.governancewrapper.md#vote)

## Constructors

### constructor

+ **new GovernanceWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: Governance\): [_GovernanceWrapper_](../classes/_wrappers_governance_.governancewrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:19_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L19)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | Governance |

**Returns:** [_GovernanceWrapper_](../classes/_wrappers_governance_.governancewrapper.md)

## Properties

### approveHotfix

• **approveHotfix**: _function_ = proxySend\( this.kit, this.contract.methods.approveHotfix, tupleParser\(bufferToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:642_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L642)

Marks the given hotfix approved by `sender`.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

**`notice`** Only the `approver` address will succeed in sending this transaction

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### concurrentProposals

• **concurrentProposals**: _function_ = proxyCall\( this.contract.methods.concurrentProposals, undefined, valueToBigNumber \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:126_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L126)

Querying number of possible concurrent proposals.

**`returns`** Current number of possible concurrent proposals.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### dequeueFrequency

• **dequeueFrequency**: _function_ = proxyCall\(this.contract.methods.dequeueFrequency, undefined, valueToBigNumber\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:135_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L135)

Query proposal dequeue frequency.

**`returns`** Current proposal dequeue frequency in seconds.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### dequeueProposalsIfReady

• **dequeueProposalsIfReady**: _function_ = proxySend\(this.kit, this.contract.methods.dequeueProposalsIfReady\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:413_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L413)

Dequeues any queued proposals if `dequeueFrequency` seconds have elapsed since the last dequeue

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### events

• **events**: _any_ = this.contract.events

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_events_](../classes/_wrappers_basewrapper_.basewrapper.md#events)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L33)

### executeHotfix

• **executeHotfix**: _function_ = proxySend\(this.kit, this.contract.methods.executeHotfix, hotfixToParams\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:664_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L664)

Executes a given sequence of transactions if the corresponding hash is prepared and approved.

**`param`** Governance hotfix proposal

**`param`** Secret which guarantees uniqueness of hash

**`notice`** keccak256 hash of abi encoded transactions computed on-chain

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getApprover

• **getApprover**: _function_ = proxyCall\(this.contract.methods.approver\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:266_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L266)

Returns the approver address for proposals and hotfixes.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getProposalMetadata

• **getProposalMetadata**: _function_ = proxyCall\( this.contract.methods.getProposal, tupleParser\(valueToString\), \(res\) =&gt; \({ proposer: res\[0\], deposit: valueToBigNumber\(res\[1\]\), timestamp: valueToBigNumber\(res\[2\]\), transactionCount: valueToInt\(res\[3\]\), descriptionURL: res\[4\], }\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:206_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L206)

Returns the metadata associated with a given proposal.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹_[_ProposalMetadata_](../interfaces/_wrappers_governance_.proposalmetadata.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### getProposalStage

• **getProposalStage**: _function_ = proxyCall\( this.contract.methods.getProposalStage, tupleParser\(valueToString\), \(res\) =&gt; Object.keys\(ProposalStage\)\[valueToInt\(res\)\] as ProposalStage \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:268_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L268)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getProposalTransaction

• **getProposalTransaction**: _function_ = proxyCall\( this.contract.methods.getProposalTransaction, tupleParser\(valueToString, valueToString\), \(res\) =&gt; \({ value: res\[0\], to: res\[1\], input: bytesToString\(res\[2\]\), }\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:223_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L223)

Returns the transaction at the given index associated with a given proposal.

**`param`** Governance proposal UUID

**`param`** Transaction index

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value, `txIndex`: number\): _Promise‹_[_ProposalTransaction_](_wrappers_governance_.md#proposaltransaction)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |
| `txIndex` | number |

### getQueue

• **getQueue**: _function_ = proxyCall\(this.contract.methods.getQueue, undefined, \(arraysObject\) =&gt; zip\( \(\_id, \_upvotes\) =&gt; \({ proposalID: valueToBigNumber\(\_id\), upvotes: valueToBigNumber\(\_upvotes\), }\), arraysObject\[0\], arraysObject\[1\] \) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:389_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L389)

Returns the proposal queue as list of upvote records.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getUpvoteRecord

• **getUpvoteRecord**: _function_ = proxyCall\( this.contract.methods.getUpvoteRecord, tupleParser\(identity\), \(o\) =&gt; \({ proposalID: valueToBigNumber\(o\[0\]\), upvotes: valueToBigNumber\(o\[1\]\), }\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:347_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L347)

Returns the current upvoted governance proposal ID and applied vote weight \(zeroes if none\).

**`param`** Address of upvoter

#### Type declaration:

▸ \(`upvoter`: [Address](_base_.md#address)\): _Promise‹_[_UpvoteRecord_](../interfaces/_wrappers_governance_.upvoterecord.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `upvoter` | [Address](_base_.md#address) |

### getUpvotes

• **getUpvotes**: _function_ = proxyCall\( this.contract.methods.getUpvotes, tupleParser\(valueToString\), valueToBigNumber \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:366_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L366)

Returns the upvotes applied to a given proposal.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getVotes

• **getVotes**: _function_ = proxyCall\( this.contract.methods.getVoteTotals, tupleParser\(valueToString\), \(res\): Votes =&gt; \({ \[VoteValue.Yes\]: valueToBigNumber\(res\[0\]\), \[VoteValue.No\]: valueToBigNumber\(res\[1\]\), \[VoteValue.Abstain\]: valueToBigNumber\(res\[2\]\), }\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:376_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L376)

Returns the yes, no, and abstain votes applied to a given proposal.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### hotfixWhitelistValidatorTally

• **hotfixWhitelistValidatorTally**: _function_ = proxyCall\( this.contract.methods.hotfixWhitelistValidatorTally, tupleParser\(bufferToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:622_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L622)

Returns the number of validators that whitelisted the hotfix

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isApproved

• **isApproved**: _function_ = proxyCall\( this.contract.methods.isApproved, tupleParser\(valueToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:240_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L240)

Returns whether a given proposal is approved.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### isDequeuedProposalExpired

• **isDequeuedProposalExpired**: _function_ = proxyCall\( this.contract.methods.isDequeuedProposalExpired, tupleParser\(valueToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:249_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L249)

Returns whether a dequeued proposal is expired.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### isHotfixPassing

• **isHotfixPassing**: _function_ = proxyCall\(this.contract.methods.isHotfixPassing, tupleParser\(bufferToString\)\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:607_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L607)

Returns whether a given hotfix can be passed.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isHotfixWhitelistedBy

• **isHotfixWhitelistedBy**: _function_ = proxyCall\( this.contract.methods.isHotfixWhitelistedBy, tupleParser\(bufferToString, \(s: Address\) =&gt; identity\(s\)\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:598_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L598)

Returns whether a given hotfix has been whitelisted by a given address.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

**`param`** address of whitelister

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isProposalPassing

• **isProposalPassing**: _function_ = proxyCall\(this.contract.methods.isProposalPassing, tupleParser\(valueToString\)\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:325_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L325)

Returns whether a given proposal is passing relative to the constitution's threshold.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isQueued

• **isQueued**: _function_ = proxyCall\(this.contract.methods.isQueued, tupleParser\(valueToString\)\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:360_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L360)

Returns whether a given proposal is queued.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isQueuedProposalExpired

• **isQueuedProposalExpired**: _function_ = proxyCall\( this.contract.methods.isQueuedProposalExpired, tupleParser\(valueToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:258_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L258)

Returns whether a dequeued proposal is expired.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isVoting

• **isVoting**: _function_ = proxyCall\(this.contract.methods.isVoting\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:178_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L178)

Returns whether or not a particular account is voting on proposals.

**`param`** The address of the account.

**`returns`** Whether or not the account is voting on proposals.

#### Type declaration:

▸ \(`account`: string\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

### minDeposit

• **minDeposit**: _function_ = proxyCall\(this.contract.methods.minDeposit, undefined, valueToBigNumber\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:140_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L140)

Query minimum deposit required to make a proposal.

**`returns`** Current minimum deposit.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### minQuorumSize

• **minQuorumSize**: _function_ = proxyCall\( this.contract.methods.minQuorumSizeInCurrentSet, undefined, valueToBigNumber \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:612_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L612)

Returns the number of validators required to reach a Byzantine quorum

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### prepareHotfix

• **prepareHotfix**: _function_ = proxySend\( this.kit, this.contract.methods.prepareHotfix, tupleParser\(bufferToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:652_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L652)

Marks the given hotfix prepared for current epoch if quorum of validators have whitelisted it.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### proposalExists

• **proposalExists**: _function_ = proxyCall\( this.contract.methods.proposalExists, tupleParser\(valueToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:338_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L338)

Returns whether a governance proposal exists with the given ID.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### propose

• **propose**: _function_ = proxySend\(this.kit, this.contract.methods.propose, proposalToParams\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:332_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L332)

Submits a new governance proposal.

**`param`** Governance proposal

**`param`** A URL where further information about the proposal can be viewed

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### queueExpiry

• **queueExpiry**: _function_ = proxyCall\(this.contract.methods.queueExpiry, undefined, valueToBigNumber\)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:145_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L145)

Query queue expiry parameter.

**`returns`** The number of seconds a proposal can stay in the queue before expiring.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### whitelistHotfix

• **whitelistHotfix**: _function_ = proxySend\( this.kit, this.contract.methods.whitelistHotfix, tupleParser\(bufferToString\) \)

_Defined in_ [_contractkit/src/wrappers/Governance.ts:631_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L631)

Marks the given hotfix whitelisted by `sender`.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_address_](../classes/_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L23)

Contract address

**Returns:** _string_

## Methods

### approve

▸ **approve**\(`proposalID`: BigNumber.Value\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:535_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L535)

Approves given proposal, allowing it to later move to `referendum`.

**`notice`** Only the `approver` address will succeed in sending this transaction

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### execute

▸ **execute**\(`proposalID`: BigNumber.Value\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:572_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L572)

Executes a given proposal's associated transactions.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### getConfig

▸ **getConfig**\(\): _Promise‹_[_GovernanceConfig_](../interfaces/_wrappers_governance_.governanceconfig.md)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:183_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L183)

Returns current configuration parameters.

**Returns:** _Promise‹_[_GovernanceConfig_](../interfaces/_wrappers_governance_.governanceconfig.md)_›_

### getDequeue

▸ **getDequeue**\(`filterZeroes`: boolean\): _Promise‹BigNumber‹›\[\]›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:403_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L403)

Returns the \(existing\) proposal dequeue as list of proposal IDs.

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `filterZeroes` | boolean | false |

**Returns:** _Promise‹BigNumber‹›\[\]›_

### getHotfixRecord

▸ **getHotfixRecord**\(`hash`: Buffer\): _Promise‹_[_HotfixRecord_](../interfaces/_wrappers_governance_.hotfixrecord.md)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:584_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L584)

Returns approved, executed, and prepared status associated with a given hotfix.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hash` | Buffer | keccak256 hash of hotfix's associated abi encoded transactions |

**Returns:** _Promise‹_[_HotfixRecord_](../interfaces/_wrappers_governance_.hotfixrecord.md)_›_

### getParticipationParameters

▸ **getParticipationParameters**\(\): _Promise‹_[_ParticipationParameters_](../interfaces/_wrappers_governance_.participationparameters.md)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:163_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L163)

Returns the participation parameters.

**Returns:** _Promise‹_[_ParticipationParameters_](../interfaces/_wrappers_governance_.participationparameters.md)_›_

The participation parameters.

### getProposal

▸ **getProposal**\(`proposalID`: BigNumber.Value\): _Promise‹_[_Proposal_](_wrappers_governance_.md#proposal)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:287_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L287)

Returns the proposal associated with a given id.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_Proposal_](_wrappers_governance_.md#proposal)_›_

### getProposalRecord

▸ **getProposalRecord**\(`proposalID`: BigNumber.Value\): _Promise‹_[_ProposalRecord_](../interfaces/_wrappers_governance_.proposalrecord.md)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:297_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L297)

Returns the stage, metadata, upvotes, votes, and transactions associated with a given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_ProposalRecord_](../interfaces/_wrappers_governance_.proposalrecord.md)_›_

### getVoteValue

▸ **getVoteValue**\(`proposalID`: BigNumber.Value, `voter`: [Address](_base_.md#address)\): _Promise‹_[_VoteValue_](../enums/_wrappers_governance_.votevalue.md)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:562_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L562)

Returns `voter`'s vote choice on a given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |
| `voter` | [Address](_base_.md#address) | Address of voter |

**Returns:** _Promise‹_[_VoteValue_](../enums/_wrappers_governance_.votevalue.md)_›_

### getVoteWeight

▸ **getVoteWeight**\(`voter`: [Address](_base_.md#address)\): _Promise‹BigNumber‹››_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:419_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L419)

Returns the number of votes that will be applied to a proposal for a given voter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `voter` | [Address](_base_.md#address) | Address of voter |

**Returns:** _Promise‹BigNumber‹››_

### revokeUpvote

▸ **revokeUpvote**\(`upvoter`: [Address](_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:522_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L522)

Revokes provided upvoter's upvote.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `upvoter` | [Address](_base_.md#address) | Address of upvoter |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### sortedQueue

▸ **sortedQueue**\(`queue`: [UpvoteRecord](../interfaces/_wrappers_governance_.upvoterecord.md)\[\]\): [_UpvoteRecord_](../interfaces/_wrappers_governance_.upvoterecord.md)_\[\]_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:460_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L460)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `queue` | [UpvoteRecord](../interfaces/_wrappers_governance_.upvoterecord.md)\[\] |

**Returns:** [_UpvoteRecord_](../interfaces/_wrappers_governance_.upvoterecord.md)_\[\]_

### stageDurations

▸ **stageDurations**\(\): _Promise‹_[_ProposalStageDurations_](../interfaces/_wrappers_governance_.proposalstagedurations.md)_›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:150_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L150)

Query durations of different stages in proposal lifecycle.

**Returns:** _Promise‹_[_ProposalStageDurations_](../interfaces/_wrappers_governance_.proposalstagedurations.md)_›_

Durations for approval, referendum and execution stages in seconds.

### timeUntilStages

▸ **timeUntilStages**\(`proposalID`: BigNumber.Value\): _Promise‹object›_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:274_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L274)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

**Returns:** _Promise‹object›_

### upvote

▸ **upvote**\(`proposalID`: BigNumber.Value, `upvoter`: [Address](_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:506_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L506)

Applies provided upvoter's upvote to given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |
| `upvoter` | [Address](_base_.md#address) | Address of upvoter |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### vote

▸ **vote**\(`proposalID`: BigNumber.Value, `vote`: keyof typeof VoteValue\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Governance.ts:548_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L548)

Applies `sender`'s vote choice to a given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |
| `vote` | keyof typeof VoteValue | Choice to apply \(yes, no, abstain\) |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_
