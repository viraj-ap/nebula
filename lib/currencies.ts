export const Currencies = [
    {value : "INR", label: "₹ Rupee" , locale: "hi-IN"}
    ,{value : "USD", label: "$ Dollar" , locale: "en-US"},
    {value : "EUR", label: "€ Euro" , locale: "de-DE"}
    ,{value : "GBP", label: "£ Pound" , locale: "en-GB"}
    ,{value : "JPY", label: "¥ Yen" , locale: "ja-JP"}
    ,{value : "CNY", label: "¥ Yuan" , locale: "zh-CN"}
]

export type Currency = (typeof Currencies)[0];