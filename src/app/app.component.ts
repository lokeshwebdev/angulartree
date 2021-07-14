import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  files1: TreeNode[] = [];
    
    files2: TreeNode[] = [];

    files3: TreeNode[] = [];

    testdata: TreeNode[] = [];
    
    constructor(private nodeService: NodeService) {
       
        
     }

     ngOnInit() {

       this.nodeService.getFiles().then(files => this.files1 = files);
       

       this.nodeService.getFiles().then(files => this.files2 = files);

      this.nodeService.getData().then(files =>  this.files3 = files); 

                   
 
        
      }
       
    
   /* expandAll(){
        this.files2.forEach( node => {
            this.expandRecursive(node, true);
        } );
    }

    collapseAll(){
        this.files2.forEach( node => {
            this.expandRecursive(node, false);
        } );
    }
     
    private expandRecursive(node:TreeNode, isExpand:boolean){
        node.expanded = isExpand;
        if (node.children){
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }*/
}
