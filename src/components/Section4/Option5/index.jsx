import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option5 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(1);
     
     const formula = (num1,num2,num3,num4) => {
          const result = (Number(num1)+(Number(num2)-Number(num3)))/Number(num4);
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }
     const formula2 = (num1,num2,num3,num4) => {
          const result = 356/((Number(num1)+(Number(num2)-Number(num3)))/Number(num4));
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }

     
     return (
          <OptionWrapper>
               <OptionHeading>Оборачиваемость кредиторской задолженности</OptionHeading>
               <h3>Рассчитать оборачиваемость кредиторской задолженности⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Себестоимость продаж'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Запасы на конец периода'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Запасы на начало период'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Средняя величина кредиторской задолженности'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент оборачиваемости кредиторской задолженности: <ResultNumber>{formula(number1,number2,number3,number4)}</ResultNumber></Result>
               <Result>Оборачиваемость кредиторской задолженности в днях: <ResultNumber>{formula2(number1,number2,number3,number4)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость кредиторской задолженности (accounts payable turnover ratio) – это показатель скорости погашения организацией своей задолженности перед поставщиками и подрядчиками. Данный коэффициент показывает, сколько раз (обычно, за год) фирма погасила среднюю величину своей кредиторской задолженности.
                         <br/><br/>
                         Как и оборачиваемость дебиторской задолженности, оборачиваемость кредиторской задолженности используется в оценке денежных потоков организации, эффективности расчетов.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость кредиторской задолженности рассчитывается как отношение стоимости приобретенных ресурсов к средней за период величине кредиторской задолженности (обычно не всей, а только связанной с операционной деятельностью компании).
                         <br/><br/>
                         Оборачиваемость кредиторской задолженности (коэффициент) = Покупки / Средняя величина кредиторской задолженности
                         <br/><br/>
                         Поскольку показатель покупок в бухгалтерской отчетности не содержится, применяется упрощенный расчетный вариант:
                         <br/><br/>
                         Покупки = Себестоимость продаж + (Запасы на конец периода – Запасы на начало период)
                         <br/><br/>
                         В российской практике часто используется более условный вариант расчета, когда вместо покупок берут выручку за период.
                         Также нужно обратить внимание, чтобы числитель и знаменатель формулы были сопоставимы с учетом НДС. Т.е. если Покупки взяты без НДС (а по упрощенной формуле выше так и получится), то и кредиторскую задолженность логично очистить от НДС.
                         Помимо расчета коэффициента ("количество оборотов"), принято рассчитывать оборачиваемость в днях:
                         <br/><br/>
                         Оборачиваемость кредиторской задолженности в днях = 365 / Коэффициент оборачиваемости кредиторской задолженности
                         <br/><br/>
                         В результате получается среднее количество дней, в течение которого счета поставщиков остаются неоплаченными.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость кредиторской задолженности сильно зависит от отрасли, масштабов деятельности организации. Для кредиторов предпочтителен более высокий коэффициент оборачиваемости, в то время как самой организации выгодней низкий коэффициент, позволяющий иметь остаток неоплаченной кредиторской задолженности в качестве бесплатного источника финансирования своей текущей деятельности.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option5;