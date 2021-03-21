import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option4 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(1);
     
     const formula = (num1,num2) => {
          const result = Number(num1)/Number(num2);
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }
     const formula2 = (num1,num2) => {
          const result = 365/(Number(num1)/Number(num2));
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }

     
     return (
          <OptionWrapper>
               <OptionHeading>Оборачиваемость запасов</OptionHeading>
               <h3>Рассчитать оборачиваемость запасов⬇️</h3>
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
                         placeholder='Среднегодовой остаток запасов'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент оборачиваемости запасов: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <Result>Оборачиваемость запасов в днях: <ResultNumber>{formula2(number1,number2)}</ResultNumber></Result>
               <br/><br/>
               <h3>ИЛИ</h3>
               <br/><br/>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Выручка'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number4"
                         placeholder='Среднегодовой остаток запасов'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент оборачиваемости запасов: <ResultNumber>{formula(number3,number4)}</ResultNumber></Result>
               <Result>Оборачиваемость запасов в днях: <ResultNumber>{formula2(number3,number4)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость запасов (inventory turnover) показывает, сколько раз за анализируемый период организация использовала средний имеющийся остаток запасов. Данный показатель характеризует качество запасов и эффективность управления ими, позволяет выявить остатки неиспользуемых, устаревших или некондиционных запасов. Важность показателя связна с тем, что прибыль возникает при каждом "обороте" запасов (т.е. использовании в производстве, операционном цикле). Обратите внимание, под запасами в данном случае понимаются и товарные запасы (запасы готовой продукции) и производственные запасы (запасы сырья и материалов).
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Оборачиваемость запасов может рассчитываться двумя способами.
                         <br/><br/>
                         1. как отношение себестоимость продаж к среднегодовому остатку запасов:
                         <br/><br/>
                         Оборачиваемость запасов (коэффициент) = Себестоимость продаж / Среднегодовой остаток запасов
                         <br/><br/>
                         Среднегодовой остаток рассчитывается как сумма запасов по бухгалтерскому балансу на начало и конец года деленная на 2.
                         <br/><br/>
                         2. как отношение выручки от продаж к среднегодовому остатку запасов:
                         Оборачиваемость запасов (коэффициент) = Выручка / Среднегодовой остаток запасов
                         И в западной и в российской практике можно встретить оба варианта расчета. Преимуществом 2-го варианта является то, что он позволяет исключить влияние учетной политики, по которой себестоимость продаж может формировать с учетом управленческих расходов или с отражением их по отдельной строке отчета о финансовых результатах. То есть организации можно сравнить по этому показателю независимо от принятой ими модели бухгалтерского учета затрат. Вероятно, чтобы устранить эту проблему Росстат РФ в качестве себестоимости продаж берет общую себестоимость проданной продукции, включающую кроме непосредственно себестоимости продаж  управленческие и коммерческие расходы.
                         <br/><br/>
                         Наряду с коэффициентом оборачиваемости часто рассчитывают показатель оборачиваемости в днях. В данном случае это означает, на сколько дней работы предприятия хватит имеющихся запасов.
                         <br/><br/>
                         Оборачиваемость запасов в днях = 365 / Коэффициент оборачиваемости запасов
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Для показателей оборачиваемости общепринятых нормативов не существует, их следует анализировать в рамках одной отрасли и еще лучше – в динамике для конкретного предприятия. Снижение коэффициента оборачиваемости запасов может отражать накопление избыточных запасов, неэффективное складское управление, накопление непригодных к использованию материалов. Но и высокая оборачиваемость не всегда выступает позитивным показателем, поскольку может говорить об истощении складских запасов, что может привести к перебоям в производственного процесса.
                         <br/><br/>
                         Кроме того, оборачиваемость запасов зависит от маркетинговой политике организации. Для организаций с высокой рентабельностью продаж свойственна более низка оборачиваемость, чем для фирм с низкой нормой рентабельности.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option4;