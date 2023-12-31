import React from 'react';

function Fashion() {
    return (
        <div>
            <div class="flex-none w-48 relative">
                <img src="./../../assets/pexels-nicolas-postiglioni-852860.jpg"
                    alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>

            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900">
                        Utility Tranparent Floral Robe
                    </h1>
                    <div class="text-lg font-semibold text-slate-500">
                        $110.00
                    </div>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        In stock
                    </div>
                </div>

                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div class="space-x-2 flex text-sm">
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                XS
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="s" />
                            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                S
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="m" />
                            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                M
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="l" />
                            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                L
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="xl" />
                            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                XL
                            </div>
                        </label>
                    </div>
                </div>
                <div class="flex space-x-4 mb-6 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Buy now
                        </button>
                        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Add to bag
                        </button>
                    </div>
                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M23,9.32a1.06,1.06,0,0,0-.1-.76,4.93,4.93,0,0,0-6.75-1.8L14,8,9,5.65a1,1,0,0,0-.92,0l-3,1.73a1,1,0,0,0-.5.84,1,1,0,0,0,.46.87l3.3,2.08-1.74,1-4.78.58a1,1,0,0,0-.53,1.75l3.54,3.06a3,3,0,0,0,3.55.44L22.5,9.93A1,1,0,0,0,23,9.32Zm-15.53,7a1,1,0,0,1-1.2-.18L4.37,14.51l2.73-.33a1,1,0,0,0,.38-.13l3.36-1.93a1,1,0,0,0,.5-.85,1,1,0,0,0-.47-.86L7.57,8.32l1.1-.63,5,2.32a1,1,0,0,0,.92,0l2.56-1.48a3,3,0,0,1,3.36.29Z" />
                        </svg>
                    </button>
                </div>
                <p class="text-sm text-slate-700">
                    Free shipping on all continental US orders.
                </p>
            </form>
        </div>
    );
}

export default Fashion;