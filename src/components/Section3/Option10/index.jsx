import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option10 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     const [number3, setNumber3] = useState(1);
     const [number4, setNumber4] = useState(1);
     const [number5, setNumber5] = useState(0);
     const [number6, setNumber6] = useState(1);
     const [number7, setNumber7] = useState(0);
     
     const formula = (num1,num2,num3,num4) => {
          return (Number(num1)/Number(num2))*(Number(num2)/Number(num3))*(Number(num3)/Number(num4));
     }

     const formula2 = (num1,num2,num3) => {
          return Number(num1)*Number(num2)*Number(num3);
     }

     // Чистая прибыль 1 
     // Выручка 2
     // Активы 3
     // Собственный капитал 4

     // Рентабельность продаж
     // Оборачиваемость активов
     // Финансовый леверидж

     return (
          <OptionWrapper>
               <OptionHeading>Формула Дюпона</OptionHeading>
               <h3>Рассчитать по формуле Дюпона⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Чистая прибыль'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Выручка'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Активы'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
               </FormWrapper>
               <Result>Значение по формуле Дюпона: <ResultNumber>{formula(number1,number2,number3,number4)}</ResultNumber></Result>
               <br/><br/>
               <h3>ИЛИ</h3>
               <br/><br/>
               <h3>Рассчитать по упрощенной формуле Дюпона⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number5"
                         placeholder='Чистая прибыль'
                         onChange={(e) => setNumber5(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number6"
                         placeholder='Выручка'
                         onChange={(e) => setNumber6(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number7"
                         placeholder='Активы'
                         onChange={(e) => setNumber7(e.target.value)}
                    />
               </FormWrapper>
               <Result>Значение по упрощенной формуле Дюпона: <ResultNumber>{formula2(number5,number6,number7)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Формула Дюпона (DuPont formula) представляет собой расчета ключевого показателя эффективности деятельности – рентабельности собственного капитала (ROE) – через три концептуальные составляющие: рентабельность продаж, оборачиваемость активов и финансовый леверидж. Показатель впервые был использован корпорацией DuPont в 20-х годах прошлого века, откуда и пошло его название.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         ROE (Формула Дюпона) = (Чистая прибыль / Выручка) * (Выручка / Активы) * (Активы / Собственный капитал) = Рентабельность продаж * Оборачиваемость активов * Финансовый леверидж
                         <br/><br/>
                         Формула Дюпона включается три фактора, влияющих на рентабельность собственного капитала:
                         <br/><br/>
                         · операционную эффективность (рентабельность продаж по чистой прибыли);
                         <br/><br/>
                         · эффективность использования всех активов ( оборачиваемость активов);
                         <br/><br/>
                         · кредитное плечо, соотношение собственного и заемного капитала (финансовый леверидж);
                         <br/><br/>
                         В случаях, когда у организации неудовлетворительная рентабельность собственного капитала, форума Дюпона помогает выявить, какой из факторов привел к такому результату.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option10;