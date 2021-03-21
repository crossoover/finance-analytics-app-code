import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option7 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     const [number3, setNumber3] = useState(1);
     
     const formula = (num1,num2,num3) => {
          return Number(num1)/(Number(num2)+Number(num3));
     }

     return (
          <OptionWrapper>
               <OptionHeading>Рентабельность задействованного капитала</OptionHeading>
               <h3>Рассчитать рентабельность задействованного капитала⬇️</h3>
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
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Долгосрочные обязательства'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Рентабельность задействованного капитала: <ResultNumber>{formula(number1,number2,number3)}</ResultNumber>%</Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Рентабельность задействованного капитала, или прибыль на инвестированный капитал (return on capital employed, ROCE) – показатель отдачи от вовлеченного в коммерческую деятельность собственного капитала организации и долгосрочно привлеченных средств (долгосрочных кредитов, займов).
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Рентабельность задействованного капитала = EBIT / Задействованный капитал = EBIT / (Собственный капитал + Долгосрочные обязательства)
                         <br/><br/>
                         где EBIT - прибыль до уплаты процентов и налогов
                         <br/><br/>
                         Часто показатель рассчитывается в виде процента, т.е. дополнительно умножением на 100. Кроме того, более точным будет расчет, где показатели знаменателя берутся как среднегодовые значения (т.е. значение на начало года плюс значение на конец года разделить на 2).
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Показатель не имеет нормативного значения. Но его важность заключается в том, что он выступает ориентиром для оценки целесообразности привлечения организацией заемный средств под определенный процент. Если процент по кредиту выше, чем рентабельности задействованного капитала, это значит, что организация не сможет использовать кредит настолько эффективно, чтобы отработать проценты по нему. Поэтому имеет смысл брать только те кредиты, процент по которым ниже рентабельности задействованного капитала.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option7;