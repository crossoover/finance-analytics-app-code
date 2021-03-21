import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option3 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(0);
     const [number5, setNumber5] = useState(0);
     
     const formula = (num1,num2,num3,num4,num5) => {
          return Number(num1)-Number(num2)-Number(num3)-Number(num4)-Number(num5);
     }

     return (
          <OptionWrapper>
               <OptionHeading>EBITDARM</OptionHeading>
               <h3>Рассчитать EBITDARM⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Выручка'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Проценты к уплате'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Налог на прибыль'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Амортизация основных средств'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number5"
                         placeholder='Расходы на аренду основных средств'
                         onChange={(e) => setNumber5(e.target.value)}
                    />
               </FormWrapper>
               <Result>EBITDARM:  <ResultNumber>{formula(number1,number2,number3,number4,number5)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>EBITDARM (Earnings before Interest, Taxes, Depreciation, Amortization, Rent and Management fees) – показатель финансовых результатов организации до вычета процентов, налогов, амортизации и арендных платежей. Данный показатель, по сути, похож на показатель EBITDA. Но в отличие EBITDA, кроме амортизации из расходов исключены платежи за не принадлежащие организации средства, т.е. за взятое в аренду имущество.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>EBITDARM = Выручка – Проценты к уплате – Налог на прибыль – Амортизация основных средств и нематериальных активов – Расходы на аренду основных средств
                         <br/><br/>
                         Показатель EBITDARM чаще используют в отраслях, где затраты на аренду основных средств составляют значительную часть (например, в гостиничном деле часто здание целиком сдается в управление).
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option3;