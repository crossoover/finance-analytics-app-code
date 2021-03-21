import React, {useState} from 'react';
import {OptionWrapper,Result,LabelForInput,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option3 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     
     const formula = (num1,num2) => {
          const result = Number(num1)/Number(num2);
          if(isNaN(result)||result===Infinity||result===-Infinity){
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
               <OptionHeading>Оборачиваемость дебиторской задолженности</OptionHeading>
               <h3>Рассчитать оборачиваемость дебиторской задолженности (коэффициент)⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         id="number1"
                         placeholder='K1'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <LabelForInput htmlFor='number1'>Выручка⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2"
                         placeholder='K2'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <LabelForInput htmlFor='number2'>Средний остаток дебиторской задолженности⬆️</LabelForInput>
               </FormWrapper>
               <Result>Коэффициент оборачиваемости дебиторской задолженности: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <Result>Оборачиваемость дебиторской задолженности в днях: <ResultNumber>{formula2(number1,number2)}</ResultNumber></Result>
               
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость дебиторской задолженности (receivable turnover ratio) измеряет скорость погашения дебиторской задолженности организации, насколько быстро организация получает оплату за проданные товары (работы, услуги) от своих покупателей.
                         <br/><br/>
                         Коэффициент оборачиваемости дебиторской задолженности показывает, сколько раз за период (год) организация получила от покупателей оплату в размере среднего остатка неоплаченной задолженности. Показатель измеряет эффективность работы с покупателями в части взыскания дебиторской задолженности, а также отражает политику организации в отношении продаж в кредит.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость дебиторской задолженности (коэффициент) = Выручка / Средний остаток дебиторской задолженности
                         <br/><br/>
                         Средний остаток дебиторской задолженности рассчитывается как сумма дебиторской задолженности покупателей по данным бухгалтерского баланса на начало и конец анализируемого периода, деленное на 2.
                         <br/><br/>
                         Также распространен расчет показателя не в виде коэффициента, а в виде количества дней, в течение которой дебиторская задолженность остается неоплаченной:
                         <br/><br/>
                         Оборачиваемость дебиторской задолженности в днях = 365 / Коэффициент оборачиваемости дебиторской задолженности
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Для оборачиваемости дебиторской задолженности, как и для других показателей оборачиваемости не существует четких нормативов, поскольку они сильно зависят от отраслевых особенностей и технологии работы предприятия. Но в любом случае, чем выше коэффициент, т.е. чем быстрее покупатели погашают свою задолженность, тем лучше для организации. При этом эффективная деятельность не обязательно сопровождается высокой оборачиваемостью. Например, при продажах в кредит остаток дебиторской задолженности будет высокий, а коэффициент ее оборачиваемости соответственно низкий.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option3;