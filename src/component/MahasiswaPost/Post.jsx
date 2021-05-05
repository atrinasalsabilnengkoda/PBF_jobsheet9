import React from "react"

const Post = (props) => {
    return(
        <div class="container py-3">
            <div class="card border-warning col-md-12">
                <div class="row ">
                    <div className="card-header bg-warning col-md-12">{props.nama}</div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3">
                        <br/><br/><br/>
                        <img src="http://2.bp.blogspot.com/-47EoU2cz1cg/UNSDP2ESFEI/AAAAAAAAISU/xwkN6d7TWHo/s1600/LOGO+POLITEKNIK+NEGERI+MALANG.png" class="w-75" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <br/>
                            <h4 class="card-title">{props.nama}</h4>
                            <p class="card-text">NIM : {props.NIM}</p>
                            <p class="card-text">Alamat : {props.alamat}</p>
                            <p class="card-text">No. HP : {props.hp}</p>
                            <p class="card-text">Angkatan : {props.angkatan}</p>
                            <p class="card-text">Status : {props.status}</p>
                            <br/>
                        </div>
                    </div>
                    <div className="card-footer bg-warning col-md-12">
                        <small><button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button></small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;