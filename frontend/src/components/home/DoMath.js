import React from 'react'
import DoMathItem from './DoMathItem'
import will from '../../assets/LetsDoMath/will.svg'
import test from '../../assets/LetsDoMath/test.svg'
import insurance from '../../assets/LetsDoMath/insurance.svg'
import income from '../../assets/LetsDoMath/income.svg'
import art from '../../assets/LetsDoMath/art.svg'
import bank from '../../assets/LetsDoMath/bank.svg'

const DoMath = () => {
  return (
    <section class="text-gray-600 body-font bg-[#171A46] ">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
                <h1 class="text-4xl mb-12 font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Let's do the math</h1>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
                <DoMathItem
                    percentage = "91%"
                    content = "Indian Citizens between the age of 25 and 55 years old do not have an updated will."
                    icon = {will}
                />
                <DoMathItem
                    percentage = "75%"
                    content = "Indian Citizens are not covered by any Life Insurance while the majority of the remaining 25% are under-insured."
                    icon = {insurance}
                />
                <DoMathItem
                    percentage = "8.5"
                    content = "Crore accounts with total balances worth ₹1,24,356 Crores lie abandoned due to inadequate succession practices."
                    icon = {bank}
                />
                <DoMathItem
                    percentage = "60%"
                    content = "Households in India are single-income households and 78% of all households have dependants in the form of children or aged parents."
                    icon = {income}
                />
                <DoMathItem
                    percentage = "98%"
                    content = "Crore accounts with total balances worth ₹1,24,356 Crores lie abandoned due to inadequate succession practices."
                    icon = {art}
                />
                <DoMathItem
                    percentage = "70%"
                    content = "Of Senior Citizens in India have a chronic medical condition but do not have test results, prescriptions,investigations in one place."
                    icon = {test}
                />
            
            </div>
        </div>
    </section>
  )
}

export default DoMath