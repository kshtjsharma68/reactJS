@extends('layouts.app')

@section('content')
<div class="container" >
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="header"><h1>React Search!</h1><p class="about">Here is a list of Reggae artists rendered from a JSON object</p></div>
    </div>
</div>
<div id="search"></div>
<style type="text/css">
    .header{
        text-align:center;
        background: #00BFB3;
    border: 2px solid white;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    }
    .header h1 {
        color:black;
        text-decoration: underline;
    }
</style>
@endsection
