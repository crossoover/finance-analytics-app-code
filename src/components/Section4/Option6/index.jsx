import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option6 = () => {
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
     const formula2 = (num1,num2) => {
          const result = 365/(Number(num1)/Number(num2));
          if(isNaN(result)){
               return 0;
          }else{
               return result;
          }
     }

     
     return (
          <OptionWrapper>
               <OptionHeading>Оборачиваемость оборотных средств</OptionHeading>
               <h3>Рассчитать оборачиваемость оборотных средств⬇️</h3>
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
                         placeholder='Оборотные активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент оборачиваемости оборотных средств: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <Result>Оборачиваемость оборотных средств в днях: <ResultNumber>{formula2(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость оборотных средств (активов) показывает, сколько раз за анализируемый период организация использовала средний имеющийся остаток оборотных средств. Согласно бухгалтерскому балансу, оборотные активы включают: запасы, денежные средства, краткосрочные финансовые вложения и краткосрочную дебиторскую задолженность, включая НДС по приобретенным ценностям. Показатель характеризует долю оборотных средств в общих активах организации и эффективность управления ими. В то же время, на него накладываются отраслевые особенности производственного цикла.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Формула оборачиваемости оборотных активов следующая:
                         <br/><br/>
                         Оборачиваемость оборотных средств = Выручка / Оборотные активы
                         <br/><br/>
                         При этом оборотные активы берутся не на начало или конец анализируемого периода, а как среднегодовой остаток (т.е. значение на начало года плюс на конец года делят на 2).
                         <br/><br/>
                         Наряду с коэффициентом оборачиваемости часто рассчитывают показатель оборачиваемости в днях.
                         <br/><br/>
                         Оборачиваемость оборотных средств в днях = 365 / Коэффициент оборачиваемости оборотных средств
                         <br/><br/>
                         В данном случае оборачиваемость в днях показывает, за сколько дней предприятие получает выручку, равную средней величине оборотных средств.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Для показателей оборачиваемости, в том числе оборачиваемости оборотных средств, общепринятых нормативов не существует, их анализируют либо в динамики, либо в сравнение с аналогичными предприятиями отрасли. Слишком низкий коэффициент, не оправданный отраслевыми особенностями, показывает излишнее накопление оборотных средств (часто – наименее ликвидной их составляющей, запасов).</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option6;