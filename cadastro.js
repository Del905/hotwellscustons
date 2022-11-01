function mascara_telefone ()
        {
           
         var tel = document.getElementById("telefone").value;
        
          tel=tel.slice(0,14);
           
          document.getElementById("telefone").value=tel;
     
          tel = document.getElementById("telefone").value.slice(0,10)
           
            var tel_formatado = document.getElementById("telefone").value;
            
            if (tel_formatado[0] !="(")
            {
                if(tel_formatado[0] !=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0]
                }
            }
            if (tel_formatado[3] !=")")
            {
                if(tel_formatado[3] !=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }
            if (tel_formatado[9] !="-")
            {
                if(tel_formatado[9] !=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }

function cpf_mascara()
{
 var cpf = document.getElementById("cpf").value;

    cpf = cpf.slice(0,14);
    
    document.getElementById("cpf").value.slice(0,10);
   
    cpf = document.getElementById("cpf").value.slice(0,10);

    var cpf_total = document.getElementById("cpf").value;
    
    if(cpf_total[3] !=".")
    {
        if(cpf_total[3] !=undefined)
        {
            document.getElementById("cpf").value=cpf_total.slice(0,3)+"."+cpf_total[3]
        }
    } 
    if(cpf_total[7] !=".")
    {
        if(cpf_total[7] !=undefined)
        {
            document.getElementById("cpf").value=cpf_total.slice(0,7)+"."+cpf_total[7]
        }
    }
    if(cpf_total[11] !="-")
    {
        if(cpf_total[11]!=undefined)
        {
            document.getElementById("cpf").value=cpf_total.slice(0,11)+"-"+cpf_total[11]
        }
    }
}

function cep_mascara()
{
    var cep = document.getElementById("cep").value;

    cep = cep.slice(0,9)
    document.getElementById("cep").value = cep;

    var cep_total = document.getElementById("cep").value;

    if(cep_total[5]!="-")
    {
        if(cep_total[5]!=undefined){
            document.getElementById("cep").value = cep_total.slice(0,5)+"-"+cep_total[5]
         }
    }
}
