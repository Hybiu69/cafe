import Swal from "sweetalert2";

export default function useAlert() {
  function ConfirmAlert() {
    Swal.fire({
      title: "Comprado!",
      text: "obrigado pela escolha!",
      icon: "success",
    });
  }
  function doubleAlert(){
    Swal.fire({
      title: "Segunda Alerta!",
      text: "texto do segundo alerta",
      icon: "question",
    }).then((result)=>{
      Swal.fire({
        position:"top-end",
        toast:true,
        icon:'success',
        title:"Produto Adicionado",
        showConfirmButton:false,
        timer:2000,
        timerProgressBar:true,
      });
    });
  }
  return { ConfirmAlert, doubleAlert };
}
