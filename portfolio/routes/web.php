<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\personalController;
Route::get('/', function () {
    return view('welcome');
});
