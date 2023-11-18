class TransformObject{
    flattenArray=[];
    transformedArray=[]

    constructor(inputList){
        inputList.forEach((obj,index)=>{
            this.flattenArray.push([]);
            this.createFlatArray(obj,index)
            });

            this.flattenArray.forEach((ele)=>{
                const transformedObject=ele.reduceRight((accumulator,value)=>{
                    let obj=this.getObject(accumulator)
                    obj['child']=value
                     
                     return accumulator
                   
                 },{})
           this.transformedArray.push(transformedObject.child)
            })
    }

   
        
        createFlatArray(obj,index){
            const item={name:obj['name'],id:obj['id']};
            this.flattenArray[index].push(item);
            if(obj['parent']){
                this.createFlatArray(obj.parent,index)
            }
         }

       
        
        getObject(obj){
        if(!obj['child']){
        return obj
        }
        return this.getObject(obj['child'])
        }

        get result(){
            return this.transformedArray
        }

}

const inputList=[
    {
        name:'Menu3',
        id:'1',
        parent:{
            name:'Menu2',
            id:'2',
            parent:{
                name:'Menu1',
                id:'3',
            }
        }
    },
    {
        name:'Menu44',
        id:'11',
        parent:{
            name:'Menu33',
            id:'22',
            parent:{
                name:'Menu22',
                id:'33',
                parent:{
                    name:'Menu11',
                    id:'44',
                }
            }
        }
    }
]

console.log(new TransformObject(inputList).result);