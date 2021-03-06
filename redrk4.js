//Implements the Runge-Kutta RK4 alogorithm for solving differential equations
// dydx is the callable function
// y0 is the row vector of initial conditions
// t_start is the simulation start time
// t_end is the simulation end time
// ts is the simulation timestep

function redrk4(dydx,y0,t_start, t_end, ts) {
    h = ts;
    yn = y0;
    tn = t_start;
    n = Math.round((t_end - t_start)/ts);
    f = dydx;
    yns=[];
    k1=[];
    k2=[];
    k3=[];
    k4=[];
    result = [];
    cnt = yn.length;
  
    for (i = 0; i <= n; i++) {

        for (j=0;j<cnt;j++){
            yns[j] = yn[j];
        }

        // console.log(tn,yn[0],yn[1],yn[2],yn[3]);
        result.push([tn,yn[0],yn[1],yn[2],yn[3]]);
        // for (j=0;j<cnt;j++){
        //     console.log(tn, yn[j]);
        // }
        // console.log("__________________");
                
        for (j=0;j<cnt;j++){
            k1[j] = f(tn, yn)[j];
        }

        for (j=0;j<cnt;j++){
            yn[j] = yns[j] + 0.5 * (h * k1[j]);
        }
        for (j=0;j<cnt;j++){
            k2[j] = f((tn + 0.5 * h), yn)[j];
        }

        for (j=0;j<cnt;j++){
            yn[j] = yns[j] + 0.5 * (h * k2[j]);
        }
        for (j=0;j<cnt;j++){
            k3[j] = f((tn + 0.5 * h), yn)[j];
        }

        for (j=0;j<cnt;j++){
            yn[j] = yns[j] + (h * k3[j]);
        }
        for (j=0;j<cnt;j++){
            k4[j] = f((tn + h), yn)[j];
        }

        for (j=0;j<cnt;j++){
            yn[j] = yns[j] + h * ((k1[j] / 6) + (k2[j]/ 3) + (k3[j] / 3) + (k4[j] / 6));
        }

        tn = tn + h;
        
    }
    console.log(result.pop());
}
