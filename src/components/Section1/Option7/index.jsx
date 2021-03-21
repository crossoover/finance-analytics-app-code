import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option7 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
           return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент финансовой зависимости</OptionHeading>
               <h3>Рассчитать коэффициент финансовой зависимости⬇️</h3>
               <FormWrapper>
               <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Обязательства'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент финансовой зависимости: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент финансовой зависимости (debt ratio) характеризует отношение заемного капитала организации ко всему капиталу (активам).Данный коэффициент относится к группе показателей, описывающих структуру капитала организации, и широко применяется на западе. В России чаще используется похожий показатель "коэффициент автономии", также характеризующий структуру капитала.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент финансовой зависимости = Обязательства / Активы
                         <br/><br/>
                         Обе составляющие формулы берутся из бухгалтерского баланса организации.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Оптимальное значение коэффициент финансовой зависимости определяется теми же соотношениями собственного и заемного капитала, как и у родственных показателей – коэффициент автономии и коэффициент финансового левериджа (debt-to-equity ratio). То есть, нормальным считается коэффициент финансовой зависимости не более 0.6-0.7. Оптимальным является коэффициент 0.5 (т.е. равное соотношение собственного и заемного капитала). Коэффициент ниже нормы, слишком низкий коэффициент говорит о слишком осторожно подходе организации к привлечению заемного капитала и об упущенных возможностях повысить рентабельность собственного капитала за счет использования эффекта финансового рычага. Коэффициент выше нормы может свидетельствовать о сильной зависимости организации от кредиторов.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option7;