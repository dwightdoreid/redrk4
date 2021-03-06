function f9(t,y){
    //block 1 first order block
    blck1_k = 1;
    blck1_u1 = 20 * blck1_k;
    blck1_y1 = y[0];
    blck1_Te = 0.05; 
    blck1_dy = (blck1_u1-blck1_y1)/blck1_Te;
    //block 2 first order block
    blck2_k = 1;
    blck2_u1 = blck1_y1*blck2_k;
    blck2_y1 = y[1];
    blck2_Te = 0.5; 
    blck2_dy = (blck2_u1-blck2_y1)/blck2_Te;
    //block3 second order block
    blck3_k = 10;
    blck3_w = 0.5;
    blck3_d = 0.4;
    blck3_u1 = blck2_y1;
    blck3_x1 = y[2];
    blck3_x2 = y[3];
    blck3_dx1 = blck3_x2;
    blck3_dx2 = blck3_w*(blck3_w*(blck3_k*blck3_u1-blck3_x1)-(2*blck3_d*blck3_x2));
    blck3_y1 = blck3_x1;

    return[blck1_dy, blck2_dy,blck3_dx1,blck3_dx2];
}


function start(){
    redrk4(f9,[0,0,0,0],0,50,50/500.0);
}
