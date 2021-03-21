import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option7 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     
     const formula = (num1,num2) => {
          const result = Number(num1)/Number(num2);
          if(isNaN(result)){
               return 0;
          }else{
               return result;
          }
     }
     
     return (
          <OptionWrapper>
               <OptionHeading>Фондоёмкость</OptionHeading>
               <h3>Рассчитать фондоёмкость⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Основные средства'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Выручка'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Фондоёмкость: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Фондоёмкость – показатель эффективности использования основных средств предприятия, рассчитанный как обратный показателю фондоотдача.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Фондоёмкость = Основные средства / Выручка
                         <br/><br/>
                         Экономический смысл фондоёмкости в том, что она показывает сумму основных средств предприятия, приходящихся на 1 рубль полученной выручки. Соответственно, этот показатель выше для отраслей, требующих бо́льших вложений во внеоборотные активы (такие отрасли называют фондоёмкие), и меньше – для отраслей с высокой долей оборотных активов (например, оптовая и розничная торговля).
                         <br/><br/>
                         Как и показатель фондоотдачи, фондоёмкость может применяться для анализа эффективности использования основных средств, но только в рамках конкретной отрасли, поскольку сильно зависит от вида деятельности. По этой же причине нет нормативно утвержденного или нормального значения данного показателя, анализировать показатель нужно в динамике и в сравнении с конкурентами.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option7;