import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option6 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
          return (Number(num1)/Number(num2))*100;
     }

     return (
          <OptionWrapper>
               <OptionHeading>Рентабельность активов</OptionHeading>
               <h3>Рассчитать рентабельность активов⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Чистая прибыль'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Рентабельность активов: <ResultNumber>{formula(number1,number2)}</ResultNumber>%</Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Рентабельность активов (return on assets, ROA) – финансовый коэффициент, характеризующий отдачу от использования всех активов организации. Коэффициент показывает способность организации генерировать прибыль без учета структуры его капитала (финансового левериджа), качество управления активами. В отличие от показателя "рентабельность собственного капитала", данный показатель учитывает все активы организации, а не только собственные средства. Поэтому он менее интересен для инвесторов.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Рентабельность активов рассчитывается делением чистой прибыли (как правило, за год) на величину всех активов (т.е сальдо баланса организации):
                         <br/><br/>
                         Рентабельность активов = Чистая прибыль / Активы
                         <br/><br/>
                         В результате расчета получается величина чистой прибыли с каждого рубля вложенного в активы организации. Часто, чтобы получить более наглядное, процентное соотношение в формуле используют умножение на 100. В этом случае показатель также можно интерпретировать как "сколько копеек приносит каждый рубль, вложенный в активы организации".
                         <br/><br/>
                         Для более точных расчетов в качестве показателя "Активы" берется не значение на конкретную дату, а среднее арифметическое значение – активы на начало года плюс активы на конец года делят на 2.
                         <br/><br/>
                         Чистая прибыль организации берется по данным "Отчета о прибылях и убытках", активы – по данным Баланса.
                         <br/><br/>
                         Если расчет производят не за год, а за другой период, то для получения результата в сопоставимом с годовым виде используется формула (в частности, в программе "Ваш финансовый аналитик"):
                         <br/><br/>
                         Рентабельность активов = Выручка*(365/Кол-во дней в периоде)/((Активы на начало + Активы на конец)/2)
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option6;