import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option4 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
          return (Number(num1)/Number(num2))*100;
     }

     return (
          <OptionWrapper>
               <OptionHeading>Норма чистой прибыли</OptionHeading>
               <h3>Рассчитать норму чистой прибыли⬇️</h3>
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
                         placeholder='Выручка'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Норма чистой прибыли: <ResultNumber>{formula(number1,number2)}</ResultNumber>%</Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Норма чистой прибыли (или рентабельность по чистой прибыли) – это показатель чистого прибыли (убытка) организации на рубль выручки. Показатель относится к группе показателей рентабельности, куда также входят рентабельность продаж, рентабельность активов, рентабельность собственного капитала и др.
                         <br/><br/>
                         Норма чистой прибыли характеризует не только прибыльность основной деятельности организации (как рентабельность продаж), а эффективность деятельности в целом. Т.е. учитывается не только прибыль от реализации продукции (работ, услуг), но и выплаты по кредитам, курсовые разницы и прочие прибыли и убытки.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Норма чистой прибыли (в процентах) = Чистая прибыль : Выручка х 100
                         <br/><br/>
                         По строкам "Отчета о финансовых результатах" формула выглядит следующим образом:
                         <br/><br/>
                         Норма чистой прибыли = (стр. 2400 : стр. 2210 )х 100
                         <br/><br/>
                         Если предприятие получило за период убыток, норма чистой прибыли будет отрицательной.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>
                              В теории не существует нормального значения нормы чистой прибыли, так как она сильно зависит от отрасли, этапа развития, на котором находится конкретное предприятие, может значительно колебаться от периода к периоду по причине возникновения у предприятия прочих, не связанных с реализацией продукции прибылей или убытков. Например, в периоды сильного колебания курса рубля к иностранным валютам у организации может возникать положительная или отрицательная курсовая разница, которая значительно повлияет на финансовый результат периода. Тем не менее, чтобы предприятие приносило собственникам  дивиденды норма чистой прибыли должна быть как минимум положительной (т.е. больше 0).
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option4;