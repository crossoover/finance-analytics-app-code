import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option6 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
           return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент покрытия процентов</OptionHeading>
               <h3>Рассчитать коэффициент покрытия процентов⬇️</h3>
               <FormWrapper>
               <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='EBIT'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Проценты к уплате'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент покрытия процентов: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент покрытия процентов (interest coverage ratio, ICR) характеризует способность организации обслуживать свои долговые обязательства. Показатель сравнивает прибыль до уплаты процентов и налогов (EBIT) за определенный период времени (обычно одни год) и проценты по долговым обязательствам за тот же период. Также данный показатель известен как коэффициент обслуживания долга.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент покрытия процентов = EBIT / Проценты к уплате
                         <br/><br/>
                         Фактически коэффициент показывает, во сколько раз прибыль до уплаты процентов и налогов превышает расходы на уплату процентов.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Чем меньше коэффициент покрытия процентов, тем выше кредитное бремя организации и тем выше вероятность наступления банкротства. Коэффициент ниже 1,5 ставит под вопрос возможность организации обслуживать свой долг. Критическим считается коэффициент менее 1 (т.е. EBIT меньше процентов к уплате), которой означает, что приток денежных средств недостаточный для выплаты процентов кредиторам.
                         <br/><br/> 
                         Чем выше коэффициент покрытия процентов, тем более устойчивое финансовое положении организации. Тем не менее, слишком высокий коэффициент говорит о слишком осторожном подходе к привлечению заемных средств, что может привести к пониженной отдаче от собственного капитала (т.к. не используется кредитное плечо).</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option6;