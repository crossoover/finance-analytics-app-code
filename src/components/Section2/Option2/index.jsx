import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option2 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(1);
     
     const formula = (num1,num2,num3) => {
           return (Number(num1)-Number(num2))/Number(num3);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент быстрой ликвидности</OptionHeading>
               <h3>Рассчитать коэффициент быстрой ликвидности⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Оборотные активы'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Запасы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Краткосрочные обязательства'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент быстрой ликвидности: <ResultNumber>{formula(number1,number2, number3)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент быстрой ликвидности (quick ratio, acid-test ratio) характеризует способность организации погасить свои краткосрочные обязательства за счет продажи ликвидных активов. При этом в ликвидные активы в данном случае включаются как денежные средства и краткосрочные финансовые вложения, так и краткосрочная дебиторская задолженность (по другой версии – все оборотные активы, кроме наименее ликвидной их части - запасов). Коэффициент быстрой ликвидности получил широкое распространение в российской и мировой практике наряду с коэффициентом текущей ликвидности.</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент быстрой ликвидности рассчитывается делением ликвидных активов на краткосрочные обязательства:
                              <br/><br/>
                              Коэффициент быстрой ликвидности = (Денежные средства + Краткосрочные финансовые вложения + Краткосрочная дебиторская задолженность) / Краткосрочные обязательства
                              <br/><br/>
                              По другой версии:
                              <br/><br/>
                              Коэффициент быстрой ликвидности = (Оборотные активы - Запасы) / Краткосрочные обязательства
                              <br/><br/>
                              Запасы считаются наименее ликвидные активами, считается, что их труднее всего перевести в деньги (т.е. реализовать), поэтому они в любом случае не участвуют в расчете.
                              <br/><br/>
                              Рассчитывается коэффициент по данным бухгалтерского учета, по Балансу организации.</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Чем выше коэффициент быстрой ликвидности, тем лучше финансовое положение компании. Нормой считается значение 1,0 и выше. В то же время, значение может отличаться для разных отраслей. При значении коэффициента менее 1 ликвидные активы не покрывают краткосрочные обязательства, а значит существует риск потери платежеспособности, что является негативным сигналом для инвесторов.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option2;