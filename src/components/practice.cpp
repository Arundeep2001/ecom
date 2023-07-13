#include<bits/stdc++.h>
using namespace std;

// void fib(int n){
//     if(n==0){
//         cout<<0;
//         return ;
//     }
//     if(n==1){
//         cout<<0<<" "<<1;
//         return ;
//     }

//     int a=0,b=1;
//     cout<<a<<" "<<b<<" ";
//     for(int i=2;i<=n;i++){
//         int c=a+b;
//         a=b;
//         b=c;
//         cout<<c<<" ";
//     }
// }

// void swap(char *a, char *b){
//     char *c = a;
//     a=b;
//     b=c;
// }

// void reverse(string &str){
//     int right= str.length()-1;
//     int left=0;
//     while(left<right){
//         swap(str[left++],str[right--]);
//     }
//     return ;
// }

// int reverse(int n){
//     int temp=n,rev=0;;
//     while(temp>0){
//         int ld = temp%10;
//         rev = rev*10 + ld;
//         temp= temp/10;
//     }
//     return rev;
// }

// bool isPrime(int n){
//     if(n==0 || n==1)return false;
//     if(n==2 || n==3)return true;
//     if(n%2==0 || n%3==0)return false;
//     for(int i=5; i*i<=n;i=i+6){
//        if(n%i==0 || n%(i+2)==0)return false;
//     }
//     return true;
// }

//  int HCF(int a, int b){
//     int res= min(a,b);
//     while(res!=1){
//         if(a%res==0 && b%res==0){
//             return res;
//         }
//         res--;
//     }
//     return res;
//  }

// int HCF(int a ,int b){
//     if(b==0)return a;
//     return HCF(b,a%b);
// }

// int LCM(int a ,int b){
//     int res=max(a,b);
//     while(true){
//         if(res%a==0 && res%b==0 ){
//             return res;
//         }
//         res++;
//     }
//     return res;
// }

// void printPrimeNumbers(int n){
//     if(n<=1)return ;
//     for(int i=2;i*i<=n;i++){
//         while(n%i==0){
//             cout<<i<<" ";
//             n=n/i;
//         }
//     }
//     if(n>1)cout<<n<<" ";
// }

// void allDivisors(int n){
//     int i;
//     for(i=1;i*i<=n;i++){
//         if(n%i==0){
//             cout<<i<<" ";
//         }
//     }
//     if(i-(n/i)==1){
//         i--;
//     }
//     for(;i>=1;i--){
//         if(n%i==0){
//             cout<<n/i<<" ";
//         }
//     }
// }

// void seive(int n){
//     vector<bool> temp(n+1,true);
//     for(int i=2;i*i<=n;i++){
//         if(temp[i]){
//             for(int j=i*i;j<=n;j=j+i){
//                 temp[j]=false;
//             }
//         }
//     }
//     for(int i=2;i<=n;i++){
//         if(temp[i]){
//             cout<<i<<" ";
//         }
//     }
// }

// int computePower(int x,int n){
//     if(n==0)return 1;
//     int temp= computePower(x,n/2);
//     if(n%2==0)return temp*temp;
//     return x*temp*temp;
// }

// void subsets(string s, string curr="",int i=0){
//     if(i==s.length()){
//         cout<<curr<<" ";
//         return ;
//     }
//     subsets(s,curr+s[i], i+1);
//     subsets(s, curr,i+1);
// }

void permute(string s,int i=0){
    if(i==s.length()-1){
        cout<<s<<" ";
        return ;
    }
    for(int j=i;j<s.length();j++){
        swap(s[i],s[j]);
        permute(s,i+1);
        swap(s[j],s[i]);
    }
}

int findRepeat(int arr[],int n){
    
    int slow= arr[0],fast=arr[arr[0]];

    while(slow!=fast){
        slow=arr[slow];
        fast=arr[arr[fast]];
    }
    fast=0;
    while(slow!=fast){
        fast=arr[fast];
        slow=arr[slow];
    }
    return slow;
}


int main(){
    int a=12,b=15;
    int arr[]={7,2,5,4,6,78,9,2};
    cout<<findRepeat(arr,8);
    return 0;
}