<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\personalInformation;
class personalController extends Controller
{
    public function personal(Request $request){
        $validation = $request->validate(
            [
    'name'     => 'required|string|max:244',   
    'email'    => 'required|string',           
    'url'      => 'nullable|image|mimes:png,jpg,jpeg|max:2048', 
    'position' => 'required|string|max:244',  
    'linkdin'  => 'required|string',          
    'github'   => 'required|string' 
            ]
        );

        if(!$validation){
            return response()->json(
                [
                    'error' => 'errror occur in validation'
                ]
            );
        }
         if($request->hasFile('url')){

            $photopath = $request->file('url')-> store('photo', 'public');
         }
        $user =  personalinformation::create(
        
         
            [
                'name' => $request->name,
                'email' =>$request->email,
                'url' => $photopath,
                'position' =>$request->position,
                'linkdin' => $request->linkdin,
                'github' =>  $request->github
           ]
        );

        if(!$user){
            return response()->json(
                [
                    'error' => 'data not submited'
                ]
            );
        }

        return  response()->json(
            [
                'message' => 'data submited'
            ]
        );
    }
    public function personalget(){
        $user = personalInformation::all();
        return $user;
    }
}
