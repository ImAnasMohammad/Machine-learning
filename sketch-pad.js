class SketchPad{
    constructor(continer,size){
        this.canvas = document.createElement("canvas");
        this.canvas.height=size;
        this.canvas.width=size;
        this.canvas.style='background-color: #ffff;'
        continer.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.isDrawing = false;
        this.path = [];
        this.#addEventListiners()
    }

    #addEventListiners(){
        this.canvas.onmousedown = (e)=>{ 
            this.path.push(this.#getMousePosition(e));
            this.isDrawing = true;
        }

        this.canvas.onmousemove = (e)=>{
            if(this.isDrawing){
                this.path.push(this.#getMousePosition(e));

            }

        }

        this.canvas.onmouseup = ()=>this.isDrawing = false;
    }

    #reDraw(){
        
    }
    #getMousePosition(e){
        const rect = this.canvas.getClientRects();
        return [
            Math.round(e.clientX-rect[0].left),
            Math.round(e.clientY-rect[0].top)
        ]
    }
}
