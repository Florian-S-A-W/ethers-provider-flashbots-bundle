export interface GasLimit {
  type: string
  hex: string
}

export interface GasUsed {
  type: string
  hex: string
}

export interface AccessList {
  address: string
  storageKeys: string[]
}

export interface GasPrice {
  type: string
  hex: string
}

export interface MaxPriorityFeePerGas {
  type: string
  hex: string
}

export interface MaxFeePerGas {
  type: string
  hex: string
}

export interface GasLimit2 {
  type: string
  hex: string
}

export interface Value {
  type: string
  hex: string
}

export interface Transaction {
  hash: string
  type: number
  accessList: AccessList[]
  blockHash: string
  blockNumber: number
  transactionIndex: number
  confirmations: number
  from: string
  gasPrice: GasPrice
  maxPriorityFeePerGas: MaxPriorityFeePerGas
  maxFeePerGas: MaxFeePerGas
  gasLimit: GasLimit2
  to: string
  value: Value
  nonce: number
  data: string
  r: string
  s: string
  v: number
  creates: string
  chainId: number
}

export interface BaseFeePerGas {
  type: string
  hex: string
}

export interface Difficulty {
  type: string
  hex: string
}

export interface BlockResponse {
  hash: string
  parentHash: string
  number: number
  timestamp: number
  nonce: string
  difficulty: number
  gasLimit: GasLimit
  gasUsed: GasUsed
  miner: string
  extraData: string
  transactions: Transaction[]
  baseFeePerGas: BaseFeePerGas
  _difficulty: Difficulty
}
