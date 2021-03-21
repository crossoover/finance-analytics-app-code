import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option4 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
           return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент текущей ликвидности</OptionHeading>
               <h3>Рассчитать коэффициент текущей ликвидности⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Оборотные активы'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Краткосрочные обязательства'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент текущей ликвидности: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент текущей (общей) ликвидности (current ratio) является мерой платежеспособности организации, способности погашать текущие (до года) обязательства организации. Кредиторы широко используют данный коэффициент в оценке текущего финансового положения организации, опасности выдаче ей краткосрочных займов. В западной практике коэффициент также известен под названием коэффициент рабочего капитала (working capital ratio).</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент текущей ликвидности рассчитывается как отношение оборотных активов к краткосрочным обязательствам равен:
                         <br/><br/>
                         Коэффициент текущей ликвидности = Оборотные активы / Краткосрочные обязательства
                         <br/><br/>
                         Расчет делают по балансу: числитель формулы берется из актива бухгалтерского баланса, знаменатель – из пассива.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Чем выше значение коэффициента текущей ликвидности, тем выше ликвидность активов компании. Нормальным, а часто и оптимальным, считается значение коэффициента 2 и более. Однако в мировой практике допускается снижение данного показателя для некоторых отраслей до 1,5.
                         <br/><br/>
                         Значение коэффициента ниже нормы (ниже 1) говорит о вероятных трудностях в погашении организацией своих текущих обязательств. Однако для полноты картины нужно смотреть поток денежных средств от операционной деятельности организации – часто низкий коэффициент оправдан мощным потоком наличности (например, в сетях быстрого питания, розничной торговле).
                         <br/><br/>
                         Слишком высокий коэффициент текущей ликвидности также не желателен, поскольку может отражать недостаточно эффективное использование оборотных активов либо краткосрочного финансирования. В любом случае, кредиторы предпочитаются видеть более высокое значение коэффициента как признак устойчивого положения компании.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option4;