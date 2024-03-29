import { findByAltText } from '@testing-library/react';
import React,{ useState, useEffect, useContext} from 'react'
import { Link, Redirect } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import CasasContext from "../../CasasContext"
import '../../App.css'

export const Ventas =(props)=> {
  const {data, setData, dataToShow, setDataToShow} = useContext(CasasContext)


  //let data = sectiondata.featuredproperties.items
/*   let data =[
    {title : "titulo 1", ciudad: "ciudad 1", precio :"precio 1"},
    {title : "titulo 2", ciudad: "ciudad 2", precio :"precio 2"},
    {title : "titulo 3", ciudad: "ciudad 3", precio :"precio 3"},
  ]   */

const [filter, setFilter] = useState({
  ciudad : '',
  precio : "999999999"
})



const handleInput = (field) => (e) =>  {
  const { value } = e.target
  setFilter({
    ...filter,
    [field] : value
  })  
}

const filtrar = () => {
  console.log( filter.ciudad)
  const filtrado = data.filter(function (el) {
    if(filter.ciudad === '' && filter.precio === '999999999'){
      return dataToShow
    }else if(filter.ciudad !== '' && filter.precio !== '999999999'){
      const data1 = el.ciudad === filter.ciudad && Number(el.precio) <= Number(filter.precio)
      if(data1.length === 0) return dataToShow
      else return data1
    }else if(filter.ciudad !== '' && filter.precio === '999999999'){
      const data1 = el.ciudad === filter.ciudad
      if(data1.length === 0) return dataToShow
      else return data1
    }else if(filter.ciudad === '' && filter.precio !== '999999999'){
      const data1 = Number(el.precio) <= Number(filter.precio)
      if(data1.length === 0) return dataToShow
      else return data1
    }
      })
  setDataToShow(filtrado)
  if(filtrado.length === 0){
    console.log("fallo")
    console.log(filter.ciudad)
    setDataToShow(data)
  }
}
  
  let imagealt = 'image'
console.log("data",dataToShow)

    return (
        <div className="">
                  <div className="banner-search-wrap" >
                    <ul className="nav nav-tabs rld-banner-tab d-flex justify-content-center">
                      <li className="nav-item ">
                        <a className="nav-link active " data-toggle="tab" href="#tabs_1">Filtrar</a>
                      </li>
                      {/*<li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_2">En renta</a>
                      </li>*/}
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="tabs_1">
                        <div className="rld-main-search">
                          <div className="row justify-content-center">                       
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                
                                <select className="select nice-select" defaultValue={''} onChange={handleInput('ciudad')}>
                                  <option value={''}  >Ciudades</option>
                                  <option value={'Maihue'}  >Maihue</option>
                                  <option value={'Galletue'}>Galletue</option>
                                  <option value={'Calafquén'}>Calafquén</option>
                                  <option value={'Santiago'}>Santiago</option>
                                  <option value={'Villarrica'}>Villarrica</option>

                                </select>
                              </div>
                            </div>                      
                            <div className="col-xl-2 col-lg-4 col-md-6">
                              <div className="rld-single-select">
                                <select className="select nice-select" defaultValue={''} onChange={handleInput('precio')}>
                                  <option value={''}>Hasta los </option>
                                  <option value={'50000000'}>$50.000.000</option>
                                  <option value={'100000000'}>$100.000.000</option>
                                  <option value={'200000000'}>$200.000.000</option>
                                  <option value={'500000000'}>$500.000.000</option>
                                  <option value={'700000000'}>$700.000.000</option>
                                  
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                            <button onClick={filtrar} className="btn btn-yellow">Buscar</button>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_2">
                        <div className="rld-main-search">
                          <div className="row">                            
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Región</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Ciudad</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Baños</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Habitaciones</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Precio</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                              <button onClick={filtrar}>filtro</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}
