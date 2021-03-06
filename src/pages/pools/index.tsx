import React, {Fragment, useState} from "react";
import Header from "../../components/header/index.";
import Swap from "../swap";
import Tail from "../../components/tail";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import {Listbox, Transition } from "@headlessui/react";
import Sort from "../../components/sort";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Pools = () =>{

    const types = [
        { id: 1, name: 'EVM' },
        { id: 2, name: 'Substrate' },
    ]
    const tokenstitle=[
        {
            title:"Assets"
        },
        {
            title:"Pool Type"
        },
        {
            title:"Fee Tier",

        },
        {
            title:"TVL"
        },
        {
            title:"Volume "
        },
        {
            title:"APY "
        },
    ]
    const extrinsic=[
        {
            tokenimg1:"https://www.worldcryptoindex.com/wp-content/uploads/2018/01/usdt-logo-300.png",
            tokenimng2:"/web3gsmall.png",
            token:"USDT-W3G",
            type:"Classic",
            fee:"0.3%",
            tvl:"$3,324,625",
            volume:"$13,903,096",
            apy:"51.84%",
        },
        {
            tokenimg1:"https://seeklogo.com/images/U/usd-coin-usdc-logo-CB4C5B1C51-seeklogo.com.png",
            tokenimng2:"web3gsmall.png",
            token:"USDC-W3G",
            type:"Classic",
            fee:"0.3%",
            tvl:"$3,324,625",
            volume:"$13,903,096",
            apy:"51.84%",
        },
        {
            tokenimg1:"https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png",
            tokenimng2:"/web3gsmall.png",
            token:"DAI-W3G",
            type:"Classic",
            fee:"0.3%",
            tvl:"$3,324,625",
            volume:"$13,903,096",
            apy:"51.84%",
        },
        {
            tokenimg1:"https://cryptoempire.games/logo-cryptoempire.png",
            tokenimng2:"web3gsmall.png",
            token:"EMP-W3G",
            type:"Classic",
            fee:"0.3%",
            tvl:"$3,324,625",
            volume:"$13,903,096",
            apy:"51.84%",
        }
    ]
    const [selected, setSelected] = useState(types[0])
    return(
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-90 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6   mx-auto ">
                                <div className="lg:flex justify-between ">
                                <div>
                                    <div className="text-3xl text-gray-200 tracking-[-0.02em] font-bold text-high-emphesis"> Provide liquidity & earn.</div>
                                    <div className="text-sm leading-5 font-medium currentColor text-gray-300">Earn LP fees by depositing tokens to the platform.</div>
                                </div>
                                <div>
                                    <button className="mt-5 lg:mt-0 bg-blue-500 px-3 py-2 rounded-full text-white">
                                        Create Pool
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6   mx-auto ">
                    <div className="">
                        <div className="flex justify-between">
                            <div className="text-gray-400 hidden lg:inline-block ">
                                <div>
                                    <div>TWAP Oracles </div>
                                    <div className="flex mt-2">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <div className="text-gray-600 w-36 font-light text-sm ml-2 -mt-0.5"> Show oracle pairs only</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-5">Fee Tiers </div>
                                    <div className="flex mt-2">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">1%</div>
                                    </div>
                                    <div className="flex mt-2">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">0.3%</div>
                                    </div>
                                    <div className="flex mt-2">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">0.05%</div>
                                    </div>
                                    <div className="flex mt-2">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <div className="text-gray-600 font-light text-sm ml-2 -mt-0.5">0.01%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:ml-10 lg:w-10/12 overflow-auto">
                                <div className="lg:flex w-full">
                                    <div className="flex ">
                                        <div className="text-xl ml-2  -mr-6 mt-1 text-gray-300">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <input type="text"
                                                   className="pl-8 bg-black bg-opacity-10 text-white text-xs md:text-sm   rounded-lg px-2 py-2 w-60 lg:w-96  border border-gray-800    outline-none"
                                                   placeholder="Search by token or pair "
                                                   id="Pools"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 lg:mt-0 lg:ml-10">
                                        {/*<Listbox value={selected} onChange={setSelected} >*/}
                                        {/*    {({ open }) => (*/}
                                        {/*        <>*/}
                                        {/*            <div className=" relative ">*/}
                                        {/*                <Listbox.Button className="relative lg:ml-4 border-gray-300 bg-gray-900 px-6 py-1  rounded-xl  xl:pl-12    text-left cursor-default flex  sm:text-base">*/}
                                        {/*                    <span className="block text-gray-300 truncate text-lg w-18 xl:w-24 mr-5 xl:mr-2"> {selected.name}</span>*/}
                                        {/*                    <span className="text-gray-200 mt-0.5">*/}
                                        {/*           <i className="fa fa-angle-down" aria-hidden="true"></i>*/}
                                        {/*        </span>*/}
                                        {/*                </Listbox.Button>*/}

                                        {/*                /!*<Transition*!/*/}
                                        {/*                /!*    show={open}*!/*/}
                                        {/*                /!*    as={Fragment}*!/*/}
                                        {/*                /!*    leave="transition ease-in duration-100"*!/*/}
                                        {/*                /!*    leaveFrom="opacity-100"*!/*/}
                                        {/*                /!*    leaveTo="opacity-0"*!/*/}
                                        {/*                /!*>*!/*/}
                                        {/*                /!*    <Listbox.Options className="absolute z-10 mt-1 w-36 xl:w-44 bg-gray-900 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">*!/*/}
                                        {/*                /!*        {types.map((type) => (*!/*/}
                                        {/*                /!*            <Listbox.Option*!/*/}
                                        {/*                /!*                key={type.id}*!/*/}
                                        {/*                /!*                className={({ active }) =>*!/*/}
                                        {/*                /!*                    classNames(*!/*/}
                                        {/*                /!*                        active ? 'text-white bg-gray-600' : 'text-gray-400',*!/*/}
                                        {/*                /!*                        'cursor-default selecttokentop-none relative py-2 pl-8 pr-4'*!/*/}
                                        {/*                /!*                    )*!/*/}
                                        {/*                /!*                }*!/*/}
                                        {/*                /!*                value={type}*!/*/}
                                        {/*                /!*            >*!/*/}
                                        {/*                /!*                {({ selected, active }) => (*!/*/}
                                        {/*                /!*                    <>*!/*/}
                                        {/*                /!*                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>*!/*/}
                                        {/*                /!*                  {type.name}*!/*/}
                                        {/*                /!*                </span>*!/*/}

                                        {/*                /!*                        {selected ? (*!/*/}
                                        {/*                /!*                            <span*!/*/}
                                        {/*                /!*                                className={classNames(*!/*/}
                                        {/*                /!*                                    active ? 'text-white' : ' text-gray-400',*!/*/}
                                        {/*                /!*                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'*!/*/}
                                        {/*                /!*                                )}*!/*/}
                                        {/*                /!*                            >*!/*/}
                                        {/*                /!*                    <CheckIcon className="h-5 w-5" aria-hidden="true" />*!/*/}
                                        {/*                /!*                  </span>*!/*/}
                                        {/*                /!*                        ) : null}*!/*/}
                                        {/*                /!*                    </>*!/*/}
                                        {/*                /!*                )}*!/*/}
                                        {/*                /!*            </Listbox.Option>*!/*/}
                                        {/*                /!*        ))}*!/*/}
                                        {/*                /!*    </Listbox.Options>*!/*/}
                                        {/*                /!*</Transition>*!/*/}
                                        {/*            </div>*/}
                                        {/*        </>*/}
                                        {/*    )}*/}
                                        {/*</Listbox>*/}
                                    </div>
                                </div>
                                <div className="text-gray-400 mt-10">
                                    Top Liquidity Pools
                                    <div className="mt-2 overflow-auto mb-32">
                                        <table className=" w-full divide-y divide-gray-700 overflow-auto">
                                            <thead className="bg-black ">
                                            <tr>
                                                {tokenstitle.map(title => (
                                                    <th key={title.title}
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-300  "
                                                    >
                                                        {title.title}
                                                    </th>
                                                ))}
                                            </tr>
                                            </thead>
                                            <tbody className="bg-black  divide-y divide-gray-700">
                                            {extrinsic.map(item => (
                                                <tr key={item.tokenimg1} className="hover:bg-gray-900">
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm font-medium text-gray-200 font-medium">
                                                        <div className="flex pr-10">
                                                            <img className="w-8 rounded-full" src={item.tokenimg1} alt=""/>
                                                            <img className="w-8 rounded-full -ml-4" src={item.tokenimng2} alt=""/>
                                                            <div className="ml-2 mt-1">
                                                                {item.token}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4  whitespace-nowrap text-sm  font-medium text-gray-200 font-medium">
                                                        <div className="bg-indigo-400 rounded-xl px-1 py-0.5 text-center bg-opacity-90">
                                                            {item.type}</div>
                                                    </td>
                                                    <td className="px-6 py-6 pr-10 whitespace-nowrap text-sm text-gray-200">
                                                        {item.fee}
                                                    </td>
                                                    <td className="px-6 py-4 pr-10 whitespace-nowrap text-base text-gray-200">
                                                        {item.tvl}
                                                    </td>
                                                    <td className="px-6 py-4 pr-10 whitespace-nowrap text-base text-gray-200">
                                                        {item.volume}
                                                    </td>
                                                    <td className="px-6 py-4  pr-10 whitespace-nowrap text-sm text-gray-200">
                                                        {item.apy}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Sort/>
                                </div>

                            </div>
                        </div>
                    </div>
                            </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}
export default Pools
