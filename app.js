function algoritmo()
{
    let cantidad_horas, horas_trabajadas, salario;
    cantidad_horas = parseFloat (document.formulario1.cantidad_horas.value);
    horas_trabajadas = parseFloat (document.formulario1.horas_trabajadas.value);
    salario=horas_trabajadas*cantidad_horas;

    if(horas_trabajadas>40)
        salario=salario+(horas_trabajadas-40)*cantidad_horas;
    if(horas_trabajadas>48)
        salario=salario+(horas_trabajadas-48)*cantidad_horas;
    document.formulario1.salario.value = salario;
}