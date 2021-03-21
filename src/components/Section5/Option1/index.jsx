import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option1 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(0);
     const [number2_1, setNumber2_1] = useState(0);
     const [number2_2, setNumber2_2] = useState(0);
     const [number2_3, setNumber2_3] = useState(0);
     const [number2_4, setNumber2_4] = useState(0);
     const [number2_5, setNumber2_5] = useState(0);
     
     const formula = (num1,num2,num3,num4) => {
           return 6.56*Number(num1)+3.26*Number(num2)+6.72*Number(num3)+1.05*Number(num4);
     }

     const formula2 = (num1,num2,num3,num4,num5) => {
          return 0.717*Number(num1)+0.847*Number(num2)+3.107*Number(num3)+0.42*Number(num4)+0.998*Number(num5);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Z-модель Альтмана (Z-счет Альтмана)</OptionHeading>
               <h3>Рассчитать 4-х факторную Z-модель Альтмана⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Рабочий капитал'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Нераспределенная прибыль'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='EBIT'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
               </FormWrapper>
               <Result>4-х факторная Z-модель Альтмана:  <ResultNumber>{formula(number1,number2,number3,number4)}</ResultNumber></Result>
               <br/><br/><br/><br/>
               <h3>Рассчитать 5-тифакторную Z-модель Альтмана⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Рабочий капитал'
                         onChange={(e) => setNumber2_1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Нераспределенная прибыль'
                         onChange={(e) => setNumber2_2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='EBIT'
                         onChange={(e) => setNumber2_3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber2_4(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number5"
                         placeholder='Выручка'
                         onChange={(e) => setNumber2_5(e.target.value)}
                    />
               </FormWrapper>
               <Result>5-тифакторная Z-модель Альтмана:  <ResultNumber>{formula2(number2_1,number2_2,number2_3,number2_4,number2_5)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Z-модель Альтмана (Z-счет Альтмана, Altman Z-Score) – это финансовая модель (формула), разработанная американским экономистом Эдвардом Альтманом, призванная дать прогноз вероятности банкротства предприятия. 
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>В основе формулы лежит комбинация 4-5 ключевых финансовых коэффициентов, характеризующих финансовое положение и результаты деятельности предприятия. Изначально формула была предложена Альтманом в 60-х годах прошлого века. Позже, автор предложил вариации данной формулы с учетом отраслевых особенностей организаций.
                         <br/><br/>
                         4-х факторная Z-модель Альтмана используется для непроизводственных предприятий (акции которых не котируются на бирже). Формула четырехфакторной модели выглядит следующим образом:
                         <br/><br/>                         
                         Z-score = 6.56T1 + 3.26T2 + 6.72T3 + 1.05T4
                         <br/><br/>
                         где,
                         <br/><br/>
                         T1 = Рабочий капитал / Активы<br/>
                         T2 = Нераспределенная прибыль / Активы<br/>
                         T3 = EBIT / Активы<br/>
                         T4 = Собственный капитал / Обязательства<br/>
                         <br/><br/>
                         Интерпретация полученного результата:
                         <br/><br/>
                         1.1 и менее – "Красна" зона, существует вероятность банкротства предприятия;<br/>
                         от 1.1 до 2.6 – "Серая" зона, пограничное состояние, вероятность банкротства не высока, но не исключается;<br/>
                         2.6 и более – "Зеленая" зона, низкая вероятность банкротства<br/>
                         Для производственных предприятий (акции которых не котируются на бирже) используется 5-тифакторная Z-модель Альтмана. Формула пятифакторной модели Альтмана такая:<br/>
                         Z-score = 0.717T1 + 0.847T2 + 3.107T3 + 0.42T4 + 0.998T5
                         <br/><br/>
                         где,
                         <br/><br/>
                         T1 = Рабочий капитал / Активы<br/>
                         T2 = Нераспределенная прибыль / Активы<br/>
                         T3 = EBIT / Активы<br/>
                         T4 = Собственный капитал / Обязательства<br/>
                         T5 = Выручка / Активы<br/>
                         <br/><br/>
                         Интерпретация полученного результата:
                         <br/><br/>
                         1.23 и менее – "Красна" зона, существует вероятность банкротства предприятия;<br/>
                         от 1.23 до 2.9 – "Серая" зона, пограничное состояние, вероятность банкротства не высока, но не исключается;<br/>
                         2.9 и более – "Зеленая" зона, низкая вероятность банкротства<br/>
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Достоверность показателя</OptionInfoHeading>
                         <OptionInfoDescription>Ноу-хау Альтмана заключается в подборе показателей и, главное, весов (коэффициентов), на которые в формуле умножаются эти показатели и оценки результирующего значения. Свои выводы Альтман делал на основе анализ американских предприятий за ряд лет. Кроме того, существуют отличные модели для компаний, акции которых котируются на бирже, и для непубличных компаний.
                         <br/><br/>
                         Из-за отраслевых особенностей, различия экономик разных стран, модель Альтмана следует использовать с осторожностью, не возлагая на нее больших надежд (особенно в российских условиях). Рекомендуется делать выводы о финансовом положении и вероятности банкротства организации не только на основе данного показателя, но по результатам анализа более широкого круга показателей.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option1;