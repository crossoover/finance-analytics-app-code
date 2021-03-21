import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option2 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     
     const formula = (num1,num2) => {
           return Number(num1)+Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>EBITDA</OptionHeading>
               <h3>Рассчитать EBITDA⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Прибыль (убыток) до налогообложения'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Проценты к уплате'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>EBITDA:  <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) – прибыль до вычета процентов, налогов и амортизации. EBITDA показывает финансовый результат компании, исключая влияние эффекта структуры капитала (т.е. процентов, уплаченных по заемным средствам), налоговых ставок и амортизационной политики организации. EBITDA позволяет грубо оценить денежный поток, исключив такую "неденежную" статью расходов как амортизация. Показатель полезен при сравнении предприятий одной отрасли, но имеющих различную структуру капитала.
                         <br/><br/>
                         EBITDA, в свою очередь, широко используется как компонент различных коэффициентов финансовой эффективности (EV/EBITDA, рентабельность продаж и др.). Инвесторы ориентируется на показатель EBITDA как индикатор ожидаемого возврата своих вложений.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>EBITDA = Прибыль (убыток) до налогообложения + (Проценты к уплате + Амортизация основных средств и нематериальных активов)
                         <br/><br/>
                         Существует заблуждение, что данный показатель рассчитывают по балансу организации. На самом деле показатель EBITDA можно рассчитать по данным "Отчета о прибылях и убытках" ("Отчета о финансовых результатах"), однако дополнительно нужна сумма амортизации основных средство и нематериальных активов, которая не содержится в указанной форме отчетности.
                         <br/><br/>
                         Отрицательный EBITDA говорит о том, что деятельность организации убыточна уже на операционной стадии, еще до оплаты пользования заимствованным капиталом, налогов, амортизации.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Рентабельность по EBITDA</OptionInfoHeading>
                         <OptionInfoDescription>
                         Показатель EBITDA используется также для расчета рентабельности (EBITDA margin): <br/>
                         EBITDA margin = EBITDA / Выручка от продаж
                         <br/><br/>
                         Данный коэффициент отражает прибыльность компании до уплаты процентов, налогов и амортизации, и является, в отличие от самого EBITDA, не абсолютным, а относительным показателем.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option2;