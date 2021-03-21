import React, {useState} from 'react';
import {OptionWrapper,LabelForInput,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option2 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     
     const formula = (num1,num2,num3) => {
           const result = (Number(num1)+6/Number(num3)*(Number(num2)-Number(num1)))/2;
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент восстановления платежеспособности</OptionHeading>
               <h3>Рассчитать коэффициент восстановления платежеспособности⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         id="number1"
                         placeholder='КТЛ НП'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <LabelForInput htmlFor="number1">Коэффициент текущей ликвидности на начало периода⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2"
                         placeholder='КТЛ КП'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2">Коэффициент текущей ликвидности на конец периода⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Период (в месяцах)'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент восстановления платежеспособности:  <ResultNumber>{formula(number1,number2,number3)}</ResultNumber></Result>
               
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент восстановления платежеспособности – это финансовый коэффициент, показывающий возможность восстановления нормальной текущей ликвидности предприятия в течение 6 месяц после отчетной даты.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент восстановления платежеспособности описан в Методических положениях по оценке финансового состояния предприятий и установлению неудовлетворительной структуры баланса, утвержденных распоряжением Федерального управления по делам о несостоятельности (банкротстве) от 12.08.1994 г. N 31-р). Согласно документу, формула расчета коэффициента следующая:
                         <br/><br/>
                         Коэффициент восстановления платежеспособности = (К1ф + 6/Т (К1ф - К1н)) / 2
                         <br/><br/>
                         где
                         <br/><br/>
                         К1ф – фактическое значение (в конце отчетного периода) коэффициента текущей ликвидности;<br/>
                         К1н – коэффициент текущей ликвидности в начале отчетного периода;<br/>
                         К1норм – нормативное значение коэффициента текущей ликвидности, К1норм = 2;<br/>
                         6 - период восстановления платежеспособности в месяцах;<br/>
                         Т - отчетный период в месяцах.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Если значение коэффициента составило больше 1, это говорит о наличии реальной возможности у предприятия восстановить свою платежеспособность в течение следующих 6 месяцев. Если получилось значение менее 1 – динамика изменения показателя текущей ликвидности с начала года до отчетной даты показывает, что у предприятия в ближайшее время нет реальной возможности восстановить платежеспособность.
                         <br/><br/>
                         Следует отменить, что коэффициент восстановления платежеспособности нельзя считать достаточно надежным показателем. Он построен на анализе тренда коэффициента текущей ликвидности всего по двум точкам (на начало года и на конец отчетного периода), что делает такой прогноз очень ненадежным. Более надежный результат дает линейный тренд по данным за 4 и более периода.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option2;