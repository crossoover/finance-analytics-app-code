import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option2 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
           return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент капитализации</OptionHeading>
               <h3>Рассчитать коэффициент капитализации⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент капитализации : <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент капитализации (capitalization ratio) – это показатель, сравнивающий размер долгосрочной кредиторской задолженности с совокупными источниками долгосрочного финансирования, включающими помимо долгосрочной кредиторской задолженности собственный капитал организации. Коэффициент капитализации позволяет оценить достаточность у организации источника финансирования своей деятельности в форме собственного капитала.
                         <br/><br/>
                         Коэффициент капитализации входит в группу показателей финансового левериджа – показателей, характеризующих соотношение собственных и заемных средств организации.
                         <br/><br/>
                         Данный коэффициент позволяет оценить предпринимательский риск. Чем выше значение коэффициента, тем больше организация зависима в своем развитии от заемного капитала, тем ниже финансовая устойчивость. В то же время, более высокий уровень коэффициента говорит о большей возможной отдачи от собственного капитала (более высокая рентабельность собственного капитала).
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент капитализации рассчитывается как отношение долгосрочных обязательств к сумме долгосрочных обязательства и собственного капитала организации:
                         <br/><br/>
                         Коэффициент капитализации = Долгосрочные обязательства / (Долгосрочные обязательства + Собственный капитал)
                         <br/><br/>
                         Коэффициент капитализации – важный показатель финансового левериджа компании, отражающий структуру источников долгосрочного финансирования. В данном случае капитализация компании (не путать с рыночной капитализацией) рассматривается как совокупность двух наиболее устойчивых пассивов – долгосрочных обязательств и собственных средств.</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Данный коэффициент не имеет устоявшегося нормативного значения, поскольку сильно зависит от отрасли, технологии работы предприятия. Однако для инвесторов более привлекательны предприятия с преобладанием собственного капитала над заемным. Тем не менее, использование только собственных источников финансирование тоже не является положительным фактором, так как снижает отдачу от вложений собственников.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option2;