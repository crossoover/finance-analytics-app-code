import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option8 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
          return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Рентабельность продаж</OptionHeading>
               <h3>Рассчитать рентабельность продаж⬇️</h3>
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
                         placeholder='Выручка'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Рентабельность продаж: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Рентабельность продаж – показатель финансовой результативности деятельности организации, показывающий какую часть выручки организации составляет прибыль. При этом в качестве финансового результата в расчете могут использоваться различные показатели прибыли, что обуславливает существование различных вариаций данного показателя. Наиболее широко используются следующие: рентабельность продаж по валовой прибыли (gross profit margin), операционная рентабельность ( return on sales, ROS), рентабельность продаж по чистой прибыли (net profit margin).
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Рентабельность продаж по валовой прибыли = Валовая прибыль / Выручка
                         <br/><br/>
                         Валовая прибыль представляет собой разницу между двумя ключевыми показателями "Отчета о прибылях и убытках": выручкой и себестоимостью продаж.
                         <br/><br/>
                         Операционная рентабельность = EBIT / Выручка
                         <br/><br/>
                         где EBIT – прибыль до вычета процентов и налогов
                         <br/><br/>
                         Рентабельность продаж по чистой прибыли = Чистая прибыль / Выручка
                         <br/><br/>
                         Для расчета всех приведенных выше показателей рентабельности достаточно данных, содержащихся во 2-й форме бухгалтерской отчетности – "Отчете о прибылях и убытках".
                         <br/><br/>
                         Нормальное значение рентабельности продаж определяется отраслевыми и прочими особенностями работы организации. При одинаковой финансовой эффективности, для организаций с длительным циклом производства, рентабельность продаж будет выше, для "высокооборотных" видов деятельности – ниже. Рентабельность продаж показывает, прибыльная или убыточная деятельность предприятия, но не дает ответа на вопрос, насколько выгодны вложения в данное предприятие. Чтобы ответить на этот вопрос, рассчитывают рентабельность активов и капитала (рентабельность собственного капитала, рентабельность инвестированного капитала).
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option8;