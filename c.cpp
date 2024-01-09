#include<iostream>
#include<vector>
using namespace std;
int main()
{
  
    // vector<int>a={5,8,9,6,3,4,5,4,4,3};
    // //  cout<< a[a+4];
    // cout<<*(a.begin()+2)<<" ";
    // a.erase(a.begin()+2);
    // cout<<*(a.begin()+2);
    // string S="lrrfrrprgprpppppmurr";
    // string S1=S;
    // int X=10,Y=20;
         
    // int x=0,y=0;
    // for(int i=0 ;i<S1.size()-1;i++){
    //     if(S1[i]=='p' && S1[i+1]=='r'){
    //         S1.erase(S1.begin()+i);
    //         S1.erase(S1.begin()+i);
    //         // cout<<S<<" ";
    //         x++;
    //         if(i==0){
    //             i=i-0;
    //         }
    //         else if(i==1){i=i-1;}
    //         else {i=i-2;}
    //     }
    //     else if(S1[i]=='r' && S1[i+1]=='p')
    //     { S1.erase(S1.begin()+i);
    //         S1.erase(S1.begin()+i);
    //         y++;
    //         if(i==0){
    //             i=i-0;
    //         }
    //         else if(i==1){i=i-1;}
    //         else {i=i-2;}
    //         }
    //         ans1=x*X +y*Y;

    //   }
    //   S1.clear();
    //   S1=S;
    //   x=0,y=0;
    //   for(int i=0 ;i<S1.size()-1 ;i++){
    //     if(S1[i]=='p' && S1[i+1]=='r'){
    //         S1.erase(S1.begin()+i);
    //         S1.erase(S1.begin()+i);
    //         // cout<<S<<" ";
    //         x++;
    //         if(i==0){
    //             i=i-0;
    //         }
    //         else if(i==1){i=i-1;}
    //         else {i=i-2;}
    //     }
    //     ans2=X*x;
    //   }
    //     S1.clear();
    //   S1=S;
    //   x=0,y=0;
    //   for(int i=0 ;i<S1.size()-1 ;i++){
    //     if(S1[i]=='r' && S1[i+1]=='p'){
    //         S1.erase(S1.begin()+i);
    //         S1.erase(S1.begin()+i);
    //         // cout<<S<<" ";
    //         y++;
    //         if(i==0){
    //             i=i-0;
    //         }
    //         else if(i==1){i=i-1;}
    //         else {i=i-2;}
    //     }
    //     ans3=Y*y;
    //   }
    //   ans=max(ans1,ans2);
    //   int a=max(ans,ans3);


    //   cout<<x<<" "<<y;
     
        string s="geeksforgeeks";
     string s1;
            
            for(int i=0;i<s.size();i++){
                if(s[i]=='a' || s[i]=='e'||s[i]=='i'||s[i]=='o' ||s[i]=='u'){
                 char c=s[i];
                s1+=c;
                }
                
            }
            cout<<s1<<endl;
            // int start=0,end=s1.size()-1;
            // while(start<end){
            //     swap(s1[start],s1[end]);
            //     start++,end--;
            // }
            int j=s1.size()-1;
            for(int i=0;i<s.size();i++){
                if(s[i]=='a' || s[i]=='e'||s[i]=='i'||s[i]=='o' ||s[i]=='u'){
                cout<<s<<" ";
                s[i]=s1[j];
                j--;}
            }
return 0;
}