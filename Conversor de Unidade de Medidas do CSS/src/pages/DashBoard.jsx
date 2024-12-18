import { useEffect, useState } from 'react';
import './DashBoard.css';
import NavBar from '../components/NavBar';

function DashBoard() {

  const [unidades_de_medidas, set_unidades_de_medidas] = useState({px_vh: ``, px_vw: ``, vh_px: ``, vw_px: ``});
  const [unidades_de_medidas_apos_mudanca, set_unidades_de_medidas_apos_mudanca] = useState({px_vh: ``, px_vw: ``, vh_px: ``, vw_px: ``});  

  const [altura_da_viewport, set_altura_da_viewport] = useState(1080);
  const [largura_da_viewport, set_largura_da_viewport] = useState(1920);

  useEffect(() => {
    const resultado = { ...unidades_de_medidas_apos_mudanca };

    if (unidades_de_medidas.px_vh !== '') {
      
      resultado.px_vh = (parseFloat(unidades_de_medidas.px_vh) / altura_da_viewport) * 100;
    } else {
      
      resultado.px_vh = '';
    }

    if (unidades_de_medidas.px_vw !== '') {
      
      resultado.px_vw = (parseFloat(unidades_de_medidas.px_vw) / largura_da_viewport) * 100;
    } else {
      
      resultado.px_vw = '';
    }

    if (unidades_de_medidas.vh_px !== '') {
      
      resultado.vh_px = (parseFloat(unidades_de_medidas.vh_px)* altura_da_viewport) / 100;
    } else {
      
      resultado.vh_px = '';
    }

    if (unidades_de_medidas.vw_px !== '') {
      
      resultado.vw_px = (parseFloat(unidades_de_medidas.vw_px) * largura_da_viewport) / 100;
    } else {
      
      resultado.vw_px = '';
    }

    set_unidades_de_medidas_apos_mudanca(resultado);
}, [unidades_de_medidas]);


  

  return (
    <div className='container_dashboard'>

      <NavBar/>

      <div className="dv_para_ajustar_a_posicao_dos_cards">

        <div className="card_da_esquerda">

            <label>Converta de PX para VH</label>
            <input type="text" placeholder='Digite a unidade em px' value={unidades_de_medidas.px_vh} onChange={e => set_unidades_de_medidas({...unidades_de_medidas, px_vh: e.target.value})}/>

            <label>Converta de PX para VW</label>
            <input type="text" placeholder='Digite a unidade em px' value={unidades_de_medidas.px_vw} onChange={e => set_unidades_de_medidas({...unidades_de_medidas, px_vw: e.target.value})}/>

            <label>Converta de VH para PX</label>
            <input type="text" placeholder='Digite a unidade em vh' value={unidades_de_medidas.vh_px} onChange={e => set_unidades_de_medidas({...unidades_de_medidas, vh_px: e.target.value})}/>

            <label>Converta de VW para PX</label>
            <input type="text" placeholder='Digite a unidade em vw' value={unidades_de_medidas.vw_px} onChange={e => set_unidades_de_medidas({...unidades_de_medidas, vw_px: e.target.value})}/>

        </div>

        <div className="card_da_direita">

          <label>PX para VH</label>
          <input type="text" placeholder='Digite a unidade em px' value={unidades_de_medidas_apos_mudanca.px_vh}/>

          <label>PX para VW</label>
          <input type="text" placeholder='Digite a unidade em px' value={unidades_de_medidas_apos_mudanca.px_vw}/>

          <label>VH para PX</label>
          <input type="text" placeholder='Digite a unidade em vh' value={unidades_de_medidas_apos_mudanca.vh_px}/>

          <label>VW para PX</label>
          <input type="text" placeholder='Digite a unidade em vw' value={unidades_de_medidas_apos_mudanca.vw_px}/>

        </div>

      </div>
    </div>
  )
}

export default DashBoard