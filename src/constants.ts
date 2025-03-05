import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x302518cc2C03A8f4fD1C2c8AC1Ff4C195A1236Ca'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = {
    570: FACTORY_ADDRESS,
    57000: '0xD7b7B9585C3A4B2a2f7B11D548A3d7B8D1884B6d',
    5701: '0xECee82d05fa8fAB14797FfBcEBe37B6181C4bf91'
}

export const INIT_CODE_HASH = '0xfe8c050f5785aee7df9239afdcf2fea2b5e2705fd28d6db4827364f1e02ec751'
export const INIT_CODE_HASH_MAP: { [chainId: number]: string } = {
    570: INIT_CODE_HASH,
    57000: '0x85c9b07c539b322c33da730d88df8396983c35a411da73d3d6c2278474890833',
    5701: '0x0100065f12b29bae29aa36044ea9a641888ad99cee9b54d7d52ff1219d9b3a2b'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
