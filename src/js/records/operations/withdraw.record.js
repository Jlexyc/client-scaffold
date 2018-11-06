import { OpRecord } from '../op-record'

import _get from 'lodash/get'

export class WithdrawRecord extends OpRecord {
  constructor (record) {
    super(record)

    this.name = 'Withdrawal'
    this.amount = record.amount
    this.asset = record.destAsset
    this.fixedFee = record.feeFixed
    this.percentFee = record.feePercent
    this.feeAsset = record.destAsset
    this.counterparty = _get(record, 'externalDetails.address')
    this.direction = 'out'
    this.destinationAsset = record.destAsset
    this.destinationAmount = record.destAmount
    this.identifier = record.identifier
  }
}
