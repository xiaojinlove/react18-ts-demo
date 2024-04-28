import React, { ChangeEvent, FC, useState } from 'react'

const FormElemsDemo: FC = () => {
  // const [checked, setChecked] = useState(false)
  // function toggleChecked() {
  //   setChecked(!checked)
  // }
  const [selectedCityList, setSelectedCityList] = useState<string[]>([])

  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    const city = event.target.value
    if (selectedCityList.includes(city)) {
      setSelectedCityList(
        selectedCityList.filter(c => {
          if (c === city) return false
          return true
        })
      )
    } else {
      setSelectedCityList(selectedCityList.concat(city))
    }
  }
  return (
    <>
      <p>form elems demo</p>
      {/* <label htmlFor="checkbox1">选中</label>
      <input type="checkbox" id="checkbox1" onChange={toggleChecked} checked={checked} /> */}
      <label htmlFor="checkbox1">北京</label>
      <input
        type="checkbox"
        id="checkbox1"
        value="beijing"
        checked={selectedCityList.includes('beijing')}
        onChange={handleCityChange}
      />
      <label htmlFor="checkbox2">上海</label>
      <input
        type="checkbox"
        id="checkbox2"
        value="shanghai"
        checked={selectedCityList.includes('shanghai')}
        onChange={handleCityChange}
      />
      <label htmlFor="checkbox3">深圳</label>
      <input
        type="checkbox"
        id="checkbox3"
        value="shenzhen"
        checked={selectedCityList.includes('shenzhen')}
        onChange={handleCityChange}
      />
      {JSON.stringify(selectedCityList)}
      <input type="hidden" name="cities" value={JSON.stringify(selectedCityList)} />
    </>
  )
}

export default FormElemsDemo
