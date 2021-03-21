import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option1 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     
     const formula = (num1,num2) => {
           return Number(num1)+Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>EBIT </OptionHeading>
               <h3>Рассчитать EBIT⬇️</h3>
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
               <Result>EBIT:  <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>EBIT (Earnings Before Interest and Taxes) – прибыль до вычета процентов и налогов. Данный показатель финансового результата организации является промежуточным, между валовой и чистой прибылью. Вычитание процентов и налогов позволяет абстрагироваться от структуры капитала организации (доли заемного капитала) и налоговых ставок, получив возможность сравнивать по данному показателю различные предприятия. Часто EBIT путают с операционной прибылью, которая в отличие EBIT не включает доходы и расходы по прочим операциям.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Показатель EBIT рассчитывает по данным "Отчета о прибылях и убытках" организации – к прибыли (убытка) до налогообложения прибавляются ранее учтенные с минусом проценты к уплате:
                         <br/><br/>
                         EBIT = стр.2300 "Прибыль (убыток) до налогообложения" + стр.2330 "Проценты к уплате"
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Нормальным считается как минимум положительное значение EBIT. Однако оно еще не гарантирует итоговую прибыль – после вычитания процентов (особенно, если у организации большое долговое бремя) может получиться убыток.
                         <br/><br/>
                         Широкое распространение в финансовом анализе получил показатель EBITDA – показатель, который больше EBIT на величину амортизации основных средств и нематериальных активов. Исключение из показателя финансового результата амортизации, основной "неденежной" статьи отчета о прибылях и убытках, делает EBITDA ближе к показателю реальных денежных потоков. Поэтому инвесторы в своих оценках чаще полагаются на показатель EBITDA, чем на EBIT.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option1;