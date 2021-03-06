import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const  Select_TokenTail = atom(false)
const  Select_TokenTop =  atom(false)
const tokenTop={
    img:"/img.png",
    name:"W3G",
}
const tokenTail ={
    img:"https://res.cloudinary.com/sushi-cdn/image/fetch/w_48,f_auto,q_auto,fl_sanitize/https://raw.githubusercontent.com/sushiswap/logos/main/network/ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7.jpg",
    name:"USDT",
}
const SwapTokenTop = atom(tokenTop)
const SwapTokenTail = atom(tokenTail)

const AssetsOpenPopup = atom(false)

const HiddenClaim = atom(true)



//
const WalletButtonShowState = atom(false)

const WalletListShowState = atom(false)

const AccountConfigPageState = atom(false)

const WalletAddress = atomWithStorage("WalletAddress","")

const AccountChooseValue = atomWithStorage('AccountChoose',0)

const AfterEvmAddressValue = atomWithStorage('AfterEvmAddress','')

const EVMAddressValue = atomWithStorage('EvmAddress','')

export {Select_TokenTop,Select_TokenTail,SwapTokenTop,SwapTokenTail,AssetsOpenPopup,WalletListShowState,AccountChooseValue,
    AfterEvmAddressValue,EVMAddressValue,WalletButtonShowState,WalletAddress,AccountConfigPageState,HiddenClaim}
