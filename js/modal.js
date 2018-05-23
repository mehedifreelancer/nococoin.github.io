function modal() {
    swal({
            title: "Qual o motivo da compra?",
            text: "Esta pergunta é necessária, por questões legais de tributação. Atualmente trabalhamos apenas com vendas para consumo próprio.",
            html: true,
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#75c50e",
            confirmButtonText: "Consumo próprio",
            cancelButtonText: "Revenda",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                swal({
                    title: "Consumo próprio!",
                    text: "Declaro, para os devidos fins, que a informação sobre a destinação do(s) produto(s) adquirido(s) é verdadeira.",
                    html: true,
                    type: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#75c50e",
                    confirmButtonText: "Confirmo!",
                    cancelButtonText: "Cancelar",
                    closeOnConfirm: true,
                    closeOnCancel: true
                });
            } else {
                swal("Infelizmente a Gaveteiro ainda não trabalha para empresas, cuja finalidade, é a revenda dos produtos adquiridos", "Atualmente trabalhamos apenas com vendas para consumo próprio.", "error");
            }
        });
}
