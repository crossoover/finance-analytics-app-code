import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option4 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(0);
     const [number5, setNumber5] = useState(1);
     
     const formula = (num1,num2,num3,num4,num5) => {
           return ((Number(num1)-Number(num2))-(Number(num3)-Number(num4)))/Number(num5);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент покрытия активов</OptionHeading>
               <h3>Рассчитать коэффициент покрытия активов⬇️</h3>
               <FormWrapper>
               <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Активы'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Нематериальные активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Краткосрочные обязательства'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Краткосрочные кредит и займы'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number5"
                         placeholder='Обязательства'
                         onChange={(e) => setNumber5(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент покрытия активов: <ResultNumber>{formula(number1,number2,number3,number4,number5)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент покрытия активов (asset coverage ratio) измеряет способность организации погасить свои долги за счет имеющихся активов. Коэффициент показывает, какая часть активов уйдет на покрытие долгов. При этом в расчет берутся только материальные и денежные активы, нематериальные активы игнорируются. Данный коэффициент позволяет инвесторам оценить ожидаемые успехи работы предприятия, вероятность наступления неплатежеспособности, банкротства.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент покрытия активов рассчитывается в три шага:
                         <br/><br/>
                         1. Определяются текущие обязательства за вычетом краткосрочных кредитов и займов.
                         <br/><br/>
                         2. Из общей величины активов вычитается стоимость нематериальных активов, после чего из полученной суммы вычитается показатель, рассчитанный на шаге 1.
                         <br/><br/>
                         3. Полученная на 2-м шаге сумма делится на величину всех обязательств компании (долгосрочных и краткосрочных).
                         <br/><br/>
                         В итоге, формула расчета коэффициент покрытия активов выглядит следующим образом:
                         <br/><br/>
                         Коэффициент покрытия активов= ((Активы – Нематериальные активы) – (Краткосрочные обязательства – Краткосрочные кредит и займи)) / Обязательства
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Устоявшегося нормативного значения для данного коэффициента нет, но обычно, в промышленности нормальным считается коэффициент покрытия активов не менее 2, в обслуживающих компаниях 1,5. К увеличению данного коэффициента приводит активное привлечение организацией заемных средств.
                         <br/><br/>
                         Анализировать коэффициент покрытия активов следует во взаимосвязи с другими финансовыми коэффициентами, коэффициентами ликвидности и платежеспособности. Кроме того, следует учитывать, что балансовая стоимость активов может сильно отличаться от рыночной их стоимости, что может существенно исказить коэффициент покрытия активов, сведя на нет его аналитическую ценность (что, в принципе, справедливо для всех финансовых коэффициентов, рассчитываемых по балансовой стоимости активов).</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option4;