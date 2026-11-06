// EDITA ESTE ARREGLO con los cursos reales que quieras mostrar.
// Los siguientes son ejemplos ficticios para el ejercicio de diseño.
const cursos = [
  { codigo: 'MAT101', nombre: 'Cálculo Diferencial e Integral', seccion: 'Sección 1', periodo: 'Otoño 2026', icono: '∑' },
  { codigo: 'ECO201', nombre: 'Introducción a la Microeconomía', seccion: 'Sección 1', periodo: 'Otoño 2026', icono: '▥' },
  { codigo: 'ECO202', nombre: 'Introducción a la Macroeconomía', seccion: 'Sección 1', periodo: 'Otoño 2026', icono: '↗' },
  { codigo: 'EST103', nombre: 'Probabilidad y Estadística', seccion: 'Sección 2', periodo: 'Otoño 2026', icono: '▤' },
  { codigo: 'ECO301', nombre: 'Econometría', seccion: 'Sección 1', periodo: 'Primavera 2025', icono: '▥' },
  { codigo: 'MAT220', nombre: 'Álgebra Lineal', seccion: 'Sección 1', periodo: 'Primavera 2025', icono: '∑' },
  { codigo: 'HUM110', nombre: 'Formación General', seccion: 'Sección 3', periodo: 'Primavera 2025', icono: '▣' }
];
const input = document.getElementById('search');
const select = document.getElementById('period');
const list = document.getElementById('courseList');
const empty = document.getElementById('empty');
const total = document.getElementById('total');
[...new Set(cursos.map(x => x.periodo))].forEach(p => {
  const op=document.createElement('option'); op.value=p; op.textContent=p; select.appendChild(op);
});
function render(){
 const q=input.value.trim().toLocaleLowerCase('es');
 const chosen=select.value;
 const filtered=cursos.filter(x => (chosen==='all'||x.periodo===chosen) && (`${x.nombre} ${x.codigo}`.toLocaleLowerCase('es').includes(q)));
 list.replaceChildren();
 for(const c of filtered){
  const article=document.createElement('article');article.className='course';
  const badge=document.createElement('div');badge.className='course-badge';badge.textContent=c.icono;
  const main=document.createElement('div');main.className='course-main';
  const title=document.createElement('div');title.className='course-title';title.textContent=c.nombre;
  const meta=document.createElement('div');meta.className='course-meta';meta.textContent=`${c.codigo}  ·  ${c.seccion}`;
  const period=document.createElement('span');period.className='period-tag';period.textContent=c.periodo;
  main.append(title,meta);article.append(badge,main,period);list.appendChild(article);
 }
 total.textContent=`${filtered.length} ${filtered.length===1?'curso':'cursos'}`;
 empty.hidden=filtered.length!==0;
}
input.addEventListener('input',render);select.addEventListener('change',render);render();
