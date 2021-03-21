import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option2 = () => {
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
     const formula2 = (num1,num2) =>{
          const result = 365/(Number(num1)/Number(num2));
          if(isNaN(result)){
               return 0;
          }else{
               return result;
          }
     }

     
     return (
          <OptionWrapper>
               <OptionHeading>Оборачиваемость активов</OptionHeading>
               <h3>Рассчитать оборачиваемость активов (коэффициент)⬇️</h3>
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
                         placeholder='Среднегодовая стоимость активов'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент оборачиваемости активов: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <Result>Оборачиваемость активов в днях: <ResultNumber>{formula2(number1,number2)}</ResultNumber></Result>
               
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость активов (asset turnover) – финансовый показатель интенсивности использования организацией всей совокупности имеющихся активов. Данный показатель используется наряду с другими показателями оборачиваемости, такими как оборачиваемость дебиторской задолженности, оборачиваемость кредиторской задолженности, оборачиваемость запасов, для анализа эффективности управления имуществом и обязательствами фирмы.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость активов (коэффициент) = Выручка / Среднегодовая стоимость активов
                         <br/><br/>
                         или
                         <br/><br/>
                         Оборачиваемость активов (в днях) = 365 / Коэффициент оборачиваемости активов
                         <br/><br/>
                         Данные о выручки можно получить из "Отчета о прибылях и убытках", данные о величине активов – из Баланса (сальдо баланса). Для расчета среднегодовой величины активов находят их сумму на начало и конец года и делят на 2.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Определенного норматива для показателей оборачиваемости не существует, поскольку они зависят от отраслевых особенностей организации производства. В капиталоемких отраслях оборачиваемость активов будет ниже, чем в торговле или сфере услуг.
                         <br/><br/>
                         Желательна более высокая оборачиваемость активов. Низкая оборачиваемость может свидетельствовать о недостаточной эффективности использования активов. Кроме того, оборачиваемость зависит от нормы рентабельности продаж. При высокой рентабельности оборачиваемость активов, как правило, ниже, а при низкой норме рентабельности – выше.
                         <br/><br/>
                         Следует обратить внимание, что в отличие от показателя "рентабельность активов", где в числителе стоит прибыль, оборачиваемость активов не дает представление о прибыльности деятельности (т.е. показатель будет иметь положительное значение и при убытках).
                         <br/><br/>
                         Для инвесторов и собственников бизнеса большую ценность имеет другой показатель рентабельности - рентабельность собственного капитала.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option2;