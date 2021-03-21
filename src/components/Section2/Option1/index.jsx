import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option1 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(1);
     
     const formula = (num1,num2,num3) => {
           return (Number(num1)+Number(num2))/Number(num3);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент абсолютной ликвидности</OptionHeading>
               <h3>Рассчитать коэффициент абсолютной ликвидности⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Денежные средства'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Краткосрочные финансовые вложения'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Текущие обязательства'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент абсолютной ликвидности:  <ResultNumber>{formula(number1,number2, number3)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент абсолютной (денежной) ликвидности (cash ratio) показывает отношение самых ликвидных активов организации – денежных средство и краткосрочных финансовых вложений – к краткосрочным обязательствам. Коэффициент отражает достаточность наиболее ликвидных активов для быстрого расчета по текущим обязательствам, характеризует "мгновенную" платежеспособность организации.
                              <br/><br/>
                              Коэффициент абсолютной ликвидности является вариацией двух других более распространенных коэффициентов ликвидности: коэффициент текущей ликвидности и коэффициент быстрой ликвидности. При этом в расчете данного показателя используют только самые быстрореализуемые (ликвидные) активы.
                              Коэффициент быстрой ликвидности = (Денежные средства + Краткосрочные финансовые вложения + Краткосрочная дебиторская задолженность) / Краткосрочные обязательства
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент рассчитывается следующим образом:
                              <br/><br/>
                              Коэффициент абсолютной ликвидности = (Денежные средства + Краткосрочные финансовые вложения) / Текущие обязательства
                              <br/><br/>
                              Все составляющие формулы берутся из бухгалтерского баланса организации.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент абсолютной ликвидности не столь популярен как коэффициенты текущей и быстрой ликвидности и не имеет прочно устоявшейся нормы. Чаще всего в качестве ориентира нормального значения показателя используют значение 0,2 и более. Однако слишком высокое значение коэффициента говорит о неоправданно высоких объемах свободных денежных средств, которые можно было бы использовать для развития бизнеса.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option1;