import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x14264CD8fb5F95d551C20E07C738a9281737290c'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = {
    570: FACTORY_ADDRESS,
    57000: '0xD7b7B9585C3A4B2a2f7B11D548A3d7B8D1884B6d'
}

export const INIT_CODE_HASH = '0x85c9b07c539b322c33da730d88df8396983c35a411da73d3d6c2278474890833'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
